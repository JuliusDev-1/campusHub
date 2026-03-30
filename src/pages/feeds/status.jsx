import { useState } from "react";
import './homefeed.css';
import { Navigate } from "react-router-dom";


function Status({ name , story,}) {


 const[status, setStatus] = useState(false);

    return(
        <>
        <div className="status"
            onClick={()=>{
                setStatus(true)
            }}
        >
            <div className="status-image">
                <img src={story} alt="" />
            </div>
            <div>{name}</div>
        </div>
        </>
    )
}

export default Status