/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import dollarIcon from "../assets/icon-dollar.svg";

const BillInput = ({ handleInput, error, isResetBtnClicked }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (isResetBtnClicked) setInputValue("");
  }, [isResetBtnClicked]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    handleInput(e);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <label htmlFor="billAmount">Bill</label>
        {error && (
          <span aria-live="polite" className="block text-sm text-red-500">
            {error}
          </span>
        )}
      </div>
      <div className="relative">
        <input
          type="text"
          name="billAmount"
          id="billAmount"
          value={inputValue}
          placeholder="0"
          onChange={handleChange}
          className={`mt-2 block w-full rounded-md border-2 bg-VeryLightGrayishCyan px-4 py-1.5 text-right text-VeryDarkCyan placeholder:text-DarkGrayishCyan md:text-2xl ${
            error
              ? "animate-shake border-red-500 outline-red-500"
              : "border-transparent outline-StrongCyan"
          }`}
        />
        <img
          src={dollarIcon}
          alt="dollar icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 transform"
        />
      </div>
    </>
  );
};

export default BillInput;
