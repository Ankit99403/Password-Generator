import React, { useState, useCallback, useEffect, useRef } from "react";

const GeneratePassword = () => {
  const [length, setLenght] = useState(8);
  const [allowedNum, setAllowedNum] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowedNum) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-=={}[]~`";
    for (let i = 1; i <= length; i++) {
      // Changed length.length to length
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allowedNum, charAllowed]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowedNum, charAllowed]);

  return (
    <>
      <h1 className="text-4xl text-center">Password Generator</h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-8 text-orange-500 bg gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-4 px-3  "
            placeholder="Password"
            value={password}
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowedNum}
              id="numberInput"
              onChange={() => {
                setAllowedNum((prev) => !prev);
              }}
            />
            <label htmlFor="">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneratePassword;
