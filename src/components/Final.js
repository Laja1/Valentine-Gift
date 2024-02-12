import React from "react";
import one from "../assets/one.svg";
import { Link } from "react-router-dom";
import three from "../assets/three.svg";
import four from "../assets/four.svg";
import two from "../assets/two.svg";
function Final() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="items-center justify-center flex pt-5">
          <Link to="/No">
            <div className="bg-[#ffffff] w-[150px] shadow-xl rounded-xl h-[60px] items-center justify-center flex">
              <h1 className="text-[#F5A9C5]">No😡</h1>
            </div>
          </Link>
        </div>
        <div className="sm:px-10">
          <div className="flex flex-sm-col lg:flex-row md:flex-col sm:flex-col pt-10 items-center justify-center gap-10 ">
            <img src={one} />
            <img src={two} />
          </div>
          <h1 className="pt-10">Nothing for you still</h1>
          <div className="flex flex-sm-col lg:flex-row md:flex-col sm:flex-col p-10 items-center justify-center gap-10 ">
            <img src={three} />
            <img src={four} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Final;
