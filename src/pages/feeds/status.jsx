import './status.css'

// We pass 'viewed' (true/false) and 'onPress' (the function to trigger)
function Status({ name, story, viewed, onPress }) {
    return (
        <div className="status" onClick={onPress}>
            <div className={viewed ? "status-ring status-viewed" : "status-ring"}>
                <img src={story} alt={name} />
            </div>
            <div>{name}</div>
        </div>
    );
}

export default Status;