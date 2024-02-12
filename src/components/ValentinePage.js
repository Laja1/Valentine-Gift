import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { motion } from "framer-motion";
import bite from "../assets/bite.svg";
import "./SpringCard.css";
import unlock from "../assets/unlock.svg";
function ValentinePage() {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleButtonHover = () => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    setButtonPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          className="card-container"
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="items-center flex align-center justify-center pt-[200px]">
            <div className="bg-[#ffffff] lg:w-[600px] shadow-xl sm:w-[300px] md:w-[450px] rounded-3xl h-[400px]">
              <h1 className="text-black font-bold items-center pt-[40px]">
                Will you be my valentine <br />
                <span className="text-[#F5A9C5] text-[40px]">Dami?</span>
              </h1>
              <div className="flex flex-row items-center gap-10 justify-center pt-20 px-5">
                <Link to="/Yes">
                  <div className="bg-[#F5A9C5] w-[150px]  shadow-xl rounded-xl h-[60px] items-center justify-center flex">
                    <h1 className="text-white">Yes🤍</h1>
                  </div>
                </Link>
                <Link to="/No">
                  <div
                    className="bg-[#F5A9C5] w-[150px] shadow-xl rounded-xl h-[60px] items-center justify-center flex"
                    style={{
                      position: "absolute",
                      top: buttonPosition.y,
                      left: buttonPosition.x,
                    }}
                    onMouseEnter={handleButtonHover}
                  >
                    <h1 className="text-white">No😡</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="ring"
          animate={{ boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.5)" }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </header>
    </div>
  );
}

export default ValentinePage;
