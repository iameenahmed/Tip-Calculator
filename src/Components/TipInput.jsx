// eslint-disable-next-line react/prop-types
const TipInput = ({ handleInput }) => {
  const tipOptions = [5, 10, 15, 25, 50];

  return (
    <div className="my-8">
      <h2 className="mb-4">Select tip %</h2>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 font-bold md:grid-cols-3 md:grid-rows-2">
        {tipOptions.map((tipOption, index) => {
          return (
            <label
              key={index}
              className="block cursor-pointer rounded-md bg-VeryDarkCyan py-3 text-center text-White hover:bg-StrongCyan"
            >
              <input
                type="radio"
                name="tipPercent"
                value={tipOption}
                className="hidden"
                onChange={handleInput}
              />
              {`${tipOption}%`}
            </label>
          );
        })}
        <input
          type="text"
          name="tipPercent"
          id="tip-percent"
          placeholder="Custom"
          onChange={handleInput}
          className="rounded-md bg-VeryLightGrayishCyan px-3.5 py-3 text-right text-DarkGrayishCyan placeholder:text-VeryDarkCyan"
        />
      </div>
    </div>
  );
};

export default TipInput;
