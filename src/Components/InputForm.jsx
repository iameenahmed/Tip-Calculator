import PeopleCountInput from "./PeopleCountInput";
import BillInput from "./BillInput";
import TipInput from "./TipInput";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const InputForm = ({ setInputState, isResetBtnClicked }) => {
  const [error, setError] = useState({});

  useEffect(() => {
    setError({});
  }, [isResetBtnClicked]);

  function handleInput(e) {
    const { name, value } = e.target;
    const regex = /^(?!0*(\.0+)?$)(\d+|\d*\.\d+)$/; // disallow leading zeros
    if (!regex.test(value)) {
      setError({ ...error, [name]: "Invalid Input" });
      return;
    }
    setError({ ...error, [name]: "" });
    setInputState((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="text-DarkGrayishCyan md:basis-1/2 md:p-[0.875rem]">
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
