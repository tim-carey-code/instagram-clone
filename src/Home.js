import React from "react";
import Gram from "./Gram";
import GramPost from "./GramPost";

import "./Home.css";

function Home() {
  return (
    <div>
      <GramPost />
      <Gram />
      <Gram />
      <Gram />
    </div>
  );
}

export default Home;
