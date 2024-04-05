import { PeopleCountInput } from "./PeopleCountInput";
import { BillInput } from "./BillInput";
import TipInput from "./TipInput";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const InputForm = ({ setInputState, isResetBtnClicked }) => {
  const [error, setError] = useState({});

  function handleInput(e) {
    const { name, value } = e.target;
    const regex = /^[1-9]*\.?[1-9]*$/;
    if (!regex.test(value)) {
      setError({ ...error, [name]: "Invalid Input" });
      return;
    }
    setError({});
    setInputState((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="text-VeryDarkCyan md:basis-1/2 md:p-[0.875rem]">
      <form>
        <BillInput
          handleInput={handleInput}
          error={error.billAmount}
          isResetBtnClicked={isResetBtnClicked}
        />
        <TipInput
          handleInput={handleInput}
          error={error.tipPercent}
          isResetBtnClicked={isResetBtnClicked}
        />
        <PeopleCountInput
          handleInput={handleInput}
          error={error.peopleCount}
          isResetBtnClicked={isResetBtnClicked}
        />
      </form>
    </div>
  );
};
export default InputForm;
