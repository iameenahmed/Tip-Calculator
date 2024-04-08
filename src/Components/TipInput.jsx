import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const TipInput = ({ handleInput, error, isResetBtnClicked }) => {
  const [selectedTip, setSelectedTip] = useState();
  const [customTip, setCustomTip] = useState("");

  const tipOptions = [5, 10, 15, 25, 50];

  useEffect(() => {
    if (isResetBtnClicked) {
      setSelectedTip("");
      setCustomTip("");
    }
  }, [isResetBtnClicked]);

  const handleInputChange = (e, isCustomTip = false) => {
    handleInput(e);
    if (isCustomTip) {
      setSelectedTip("");
      setCustomTip(e.target.value);
    } else {
      setSelectedTip(e.target.value);
      setCustomTip("");
    }
  };

  return (
    <fieldset className="my-[2.125rem]">
      <div className="flex items-center justify-between">
        <legend className="mb-4">Select tip %</legend>
        {error && <span className="block text-sm text-red-500">{error}</span>}
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-3.5 font-bold min-[440px]:grid-cols-3 min-[440px]:grid-rows-2">
        {tipOptions.map((tipOption, index) => {
          return (
            <label
              key={index}
              className={`block cursor-pointer rounded-md py-2 text-center text-2xl text-White transition-colors duration-300 ${
                selectedTip === tipOption.toString()
                  ? "bg-StrongCyan"
                  : "bg-VeryDarkCyan hover:bg-StrongCyan"
              }`}
            >
              <input
                type="radio"
                name="tipPercent"
                value={tipOption}
                checked={selectedTip === tipOption.toString()}
                className="hidden"
                onChange={(e) => handleInputChange(e)}
              />
              {`${tipOption}%`}
            </label>
          );
        })}
        <input
          type="text"
          name="tipPercent"
          id="tipPercent"
          value={customTip}
          placeholder="Custom"
          onChange={(e) => handleInputChange(e, true)}
          className={`rounded-md border-2 bg-VeryLightGrayishCyan px-2.5 py-2 text-right text-2xl text-VeryDarkCyan placeholder:text-center placeholder:text-DarkGrayishCyan ${
            error
              ? "animate-shake border-red-500 outline-red-500"
              : "border-transparent outline-StrongCyan"
          }`}
        />
      </div>
    </fieldset>
  );
};

export default TipInput;
