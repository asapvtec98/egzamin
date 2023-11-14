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
            setLike(false);
            setCount(count - 1);
        }


    };

    return(
        <div className="comment">
            <h2>{props.title}</h2>
            <div>
                    <p className="inline" >{count}</p>
                    <button type="button" onClick={() => {
                        handleLikes();
                    }}>{show === true ? 'LIKE' : 'DISLIKE'}</button>
            </div>
        </div>
    )
    
}
export default Komentarz;