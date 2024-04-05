import { useState, useEffect } from "react";
import personIcon from "../assets/icon-person.svg";

// eslint-disable-next-line react/prop-types
const PeopleCountInput = ({ handleInput, error, isResetBtnClicked }) => {
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
        <label htmlFor="peopleCount">Number of People</label>
        {error && <span className="block text-sm text-red-500">{error}</span>}
      </div>

      <div className="relative">
        <input
          type="text"
          name="peopleCount"
          id="peopleCount"
          value={inputValue}
          placeholder="0"
          onChange={handleChange}
          className={`mt-2 block w-full rounded-md bg-VeryLightGrayishCyan px-4 py-3 text-right placeholder:text-VeryDarkCyan md:text-2xl ${
            error ? "outline-red-500" : "outline-StrongCyan"
          }`}
        />
        <img
          src={personIcon}
          alt="person icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 transform"
        />
      </div>
    </>
  );
};

export default PeopleCountInput;
