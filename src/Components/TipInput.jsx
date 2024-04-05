import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const TipInput = ({ handleInput, error, isResetBtnClicked }) => {
  const [selectedTip, setSelectedTip] = useState();

  const tipOptions = [5, 10, 15, 25, 50];

  const inputRef = useRef(null);
  const radioRef = useRef(null);
  isResetBtnClicked && (inputRef.current.value = "");
  isResetBtnClicked && (radioRef.current.checked = false);
  useEffect(() => {
    setSelectedTip("");
  }, [isResetBtnClicked]);

  const handleRadioChange = (e) => {
    handleInput(e);
    setSelectedTip(e.target.value);
  };

  return (
    <fieldset className="my-8">
      <div className="flex items-center justify-between">
        <legend className="mb-4">Select tip %</legend>
        {error && <span className="block text-sm text-red-500">{error}</span>}
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 font-bold md:grid-cols-3 md:grid-rows-2">
        {tipOptions.map((tipOption, index) => {
          return (
            <label
              key={index}
              className={`block cursor-pointer rounded-md py-3 text-center text-White transition-colors duration-300 md:text-2xl ${
                selectedTip === tipOption.toString()
                  ? "bg-StrongCyan"
                  : "bg-VeryDarkCyan hover:bg-StrongCyan"
              }`}
            >
              <input
                type="radio"
                ref={radioRef}
                name="tipPercent"
                value={tipOption}
                className="hidden"
                onChange={handleRadioChange}
              />
              {`${tipOption}%`}
            </label>
          );
        })}
        <input
          type="text"
          name="tipPercent"
          id="tipPercent"
          ref={inputRef}
          placeholder="Custom"
          onChange={handleInput}
          className={`rounded-md bg-VeryLightGrayishCyan px-3.5 py-3 text-right text-DarkGrayishCyan outline-StrongCyan placeholder:text-VeryDarkCyan md:text-2xl ${
            error ? "outline-red-500" : "outline-StrongCyan"
          }`}
        />
      </div>
    </fieldset>
  );
};

export default TipInput;
