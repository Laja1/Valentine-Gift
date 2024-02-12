import React from "react";

import { Link } from "react-router-dom";
import un from "../assets/un.png";
import deux from "../assets/deux.png";
import two from "../assets/two.png";

function No() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex sm:flex lg:flex-row md:flex-col sm:flex-col pt-10 items-center justify-center gap-10 ">
          <img src={un} className="w-[350px]" />
          <img src={deux} className="w-[350px]" />
        </div>
        <h1 className="pt-10">CLAP FOR YOURSELF 👏🏾</h1>
      </header>
    </div>
  );
}

export default No;
