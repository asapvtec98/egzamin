import React, { useState } from "react";
import "./Comment.css";

function Komentarz(props) {
    const [isClicked, setLike] = useState(props.isClicked);
    const [count, setCount] = useState(parseInt(props.likes));

    const handleLikes = () => {
        if(!isClicked) {
            setLike(true);
            setCount(count + 1);
        } else {
            setCount(count - 1);
            setLike(false);
            
        }


    };

    return(
        <div className="comment">
            <h2>{props.title}</h2>
            <div>
                    <p className="inline" >{count}</p>
                    <button type="button" onClick={() => {
                        handleLikes();
                    }}>{isClicked === true ? 'LIKE' : 'DISLIKE'}</button>
            </div>
        </div>
    )
    
}
export default Komentarz;