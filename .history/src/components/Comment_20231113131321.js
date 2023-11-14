import React, { useState } from "react";
import "./Comment.css"

function Komentarz(props) {
    return() => {
        <div>
            <h2>{props.title}</h2>
            <p>{props.likes}</p>
        </div>
    }
}
export default Komentarz;