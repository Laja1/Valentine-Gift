import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import bite from "../assets/bite.svg";
import unlock from "../assets/unlock.svg";
function Unlock() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="items-center  flex-col flex py-10 ">
          <img src={bite} />
          <div>
            <h1>Open For A Surprise</h1>
          </div>
          <Link to="/ValentinePage">
            <div className="mt-[200px] flex flex-col items-center justify-center">
              <img src={unlock} />
              <h1>Click Me</h1>
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Unlock;
