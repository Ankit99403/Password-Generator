import React, { useState } from "react";
// import Card from "./components/Card";
import BgChanger from "./components/BgChanger.jsx";
function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-2000"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl shadow-lg ">
            <button
              className="outline-none px-4 rounded-xl"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "20px",
              }}
            >
              Red
            </button>{" "}
            <button
              className="outline-none px-4 rounded-xl"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "20px",
              }}
            >
              Red
            </button>{" "}
            <button
              className="outline-none px-4 rounded-xl"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "20px",
              }}
            >
              Red
            </button>{" "}
            <button
              className="outline-none px-4 rounded-xl"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "20px",
              }}
            >
              Red
            </button>{" "}
            <button
              className="outline-none px-4 rounded-xl"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "20px",
              }}
            >
              Red
            </button>{" "}
            <button
              className="outline-none px-4 rounded-xl"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "20px",
              }}
            >
              Red
            </button>{" "}
            <button
              className="outline-none px-4 rounded-xl"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "20px",
              }}
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
