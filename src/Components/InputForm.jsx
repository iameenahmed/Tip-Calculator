import TipInput from "./TipInput";
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

// eslint-disable-next-line react/prop-types
const InputForm = ({ setInputState }) => {
  function handleInput(e) {
    const { name, value } = e.target;
    setInputState((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="text-VeryDarkCyan md:basis-1/2 md:p-[0.875rem]">
      <form>
        <label htmlFor="billAmount">Bill</label>
        <div className="relative">
          <input
            type="text"
            name="billAmount"
            id="bill"
            placeholder="0"
            onChange={handleInput}
            className="mt-2 block w-full rounded-md bg-VeryLightGrayishCyan px-4 py-3 text-right placeholder:text-VeryDarkCyan"
          />
          <img
            src={dollarIcon}
            alt="dollar icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 transform"
          />
        </div>

        <TipInput handleInput={handleInput} />

        <label htmlFor="number-of-people">Number of People</label>

        <div className="relative">
          <input
            type="text"
            name="peopleCount"
            id="number-of-people"
            placeholder="0"
            onChange={handleInput}
            className="mt-2 block w-full rounded-md bg-VeryLightGrayishCyan px-4 py-3 text-right placeholder:text-VeryDarkCyan"
          />
          <img
            src={personIcon}
            alt="person icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 transform"
          />
        </div>
      </form>
    </div>
  );
};
export default InputForm;
