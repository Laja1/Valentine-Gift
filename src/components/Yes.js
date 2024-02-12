import React from "react";
import one from "../assets/one.png";
import { Link } from "react-router-dom";
import three from "../assets/three.png";
import four from "../assets/four.png";
import arr from "../assets/arr.svg";
import arr2 from "../assets/arr2.svg";
import two from "../assets/two.png";
import main from "../assets/main.svg";
import six from "../assets/six.png";
import five from "../assets/five.png";
import eight from "../assets/eight.png";
import a from "../assets/a.png";
import b from "../assets/b.png";
import d from "../assets/d.png";
import c from "../assets/c.png";
import seven from "../assets/seven.png";

function Yes() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex sm:flex lg:flex-row md:flex-col sm:flex-col pt-10 items-center justify-center gap-10 ">
          <img src={one} alt="One" className="w-[120px]" />
          <img src={two} alt="Two" className="w-[120px]" />
          <img src={three} alt="Three" className="w-[120px]" />
          <img src={four} alt="Four" className="w-[120px]" />
        </div>
        <h1>Damilola Paula Ojo</h1>
        <div className="flex flex-row items-center justify-center ">
          <div className="flex sm:flex lg:flex-col md:flex-col sm:flex-col pt-5 mr-[300px] items-center justify-center gap-10 ">
            <img src={a} alt="a" className="w-[120px]" />
            <img src={b} alt="b" className="w-[120px]" />
          </div>
          <div>
            <Link to="/Final">
              <div className="justify-center items-center flex pt-5">
                <img src={main} alt="Main" className="main-heart" />
              </div>
            </Link>
            <div className="flex-row flex items-center gap-[100px] justify-center">
              <div className="pt-[-10px] flex">
                <img src={arr} alt="Arrow" />
              </div>
              <div className=" pt-[-10px] flex">
                <img src={arr2} alt="Arrow2" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center ">
            <div className="flex sm:flex lg:flex-col md:flex-col sm:flex-col pt-5 ml-[300px] items-center justify-center gap-20 ">
              <img src={c} alt="c" className="w-[120px]" />
              <img src={d} alt="d" className="w-[120px]" />
            </div>
          </div>
        </div>
        <h1>AS I DONT HAVE MONEY TAKE THIS ONE</h1>
        <div className="flex  lg:flex-row md:flex-col sm:flex-col pt-5 items-center justify-center gap-10 ">
          <img src={five} alt="Five" className="w-[120px]" />
          <img src={six} alt="Six" className="w-[120px]" />
          <img src={seven} alt="Seven" className="w-[120px]" />
          <img src={eight} alt="Eight" className="w-[120px]" />
        </div>
      </header>
    </div>
  );
}

export default Yes;
