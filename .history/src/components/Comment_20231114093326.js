import React, { useState } from "react";
import "./Comment.css";

function Komentarz(props) {
    const [likes, setLike] = useState(false);
    const [count, setCount] = useState(parseInt(props.likes));
    const [show, setShow] = useState(true);

    const handleLikes = () => {
        if(!likes) {
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
            <div></div>
            <button type="button" onClick={() => {
                setShow(!show)
                handleLikes();
            }}>{show === true ? 'LIKE' : 'DISLIKE'}</button>
            <p>{count}</p>
        </div>
    )
    
}
export default Komentarz;