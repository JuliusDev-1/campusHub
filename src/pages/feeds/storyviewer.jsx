import { useState, useEffect } from "react";

function StoryViewer({ stories, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentStory = stories[currentIndex];

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) return prev + 1; // Increase progress
          
          // If progress hits 100, move to next story or close
          if (currentIndex < stories.length - 1) {
            setCurrentIndex(prevIdx => prevIdx + 1);
            return 0; // Reset progress for next story
          } else {
            onClose();
            return 100;
          }
        });
      }, 50); // 50ms * 100 steps = 5 seconds
    }
    return () => clearInterval(interval);
  }, [isPaused, currentIndex, stories.length, onClose]);

  return (
    <div 
      className="story-viewer-overlay"
      onMouseDown={() => setIsPaused(true)} 
      onMouseUp={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)} // For Mobile
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Multiple Progress Bars */}
      <div className="story-progress-group">
        {stories.map((_, index) => (
          <div key={index} className="progress-bg">
            <div 
              className="progress-fill" 
              style={{ 
                width: index < currentIndex ? "100%" : index === currentIndex ? `${progress}%` : "0%" 
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="story-image-container">
        <img src={currentStory.image} alt="status" />
      </div>
    </div>
  );
}