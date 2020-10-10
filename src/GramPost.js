import React from "react";
import "./GramPost.css";

function GramPost() {
  return (
    <div className="post">
      <form action="">
        <input type="text" />
        <input type="file" />
        <button onClick="submit">Post to IG</button>
      </form>
    </div>
  );
}

export default GramPost;
