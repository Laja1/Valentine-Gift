import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Cat from "../assets/landing.svg";
import lock from "../assets/lock.svg";
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="items-center  flex-col flex py-10 ">
          <img src={Cat} />
          <div>
            <h1>Hi Welcome,</h1>
          </div>
          <Link to="/Unlock">
            <div className="mt-[200px] flex flex-col items-center justify-center">
              <img src={lock} />
              <h1>Click Me</h1>
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
