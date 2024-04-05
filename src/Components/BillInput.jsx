/* eslint-disable react/prop-types */
import { useRef } from "react";
import dollarIcon from "../assets/icon-dollar.svg";

export function BillInput({ handleInput, error, isResetBtnClicked }) {
  const inputRef = useRef(null);
  isResetBtnClicked && (inputRef.current.value = "");
  return (
    <>
      <div className="flex items-center justify-between">
        <label htmlFor="billAmount">Bill</label>
        {error && <span className="block text-sm text-red-500">{error}</span>}
      </div>
      <div className="relative">
        <input
          type="text"
          name="billAmount"
          id="billAmount"
          placeholder="0"
          ref={inputRef}
          onChange={handleInput}
          className={`mt-2 block w-full rounded-md bg-VeryLightGrayishCyan px-4 py-3 text-right  placeholder:text-VeryDarkCyan md:text-2xl ${
            error ? "outline-red-500" : "outline-StrongCyan"
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
}
