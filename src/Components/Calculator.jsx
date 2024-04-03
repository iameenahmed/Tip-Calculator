import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import Result from "./Result";

const Calculator = () => {
  const [inputState, setInputState] = useState({
    billAmount: "",
    peopleCount: "",
    tipPercent: "",
  });

  const [resultState, setResultState] = useState({
    tipAmount: "0.00",
    totalPerPerson: "0.00",
  });

  function calculateTipAmount({ billAmount, peopleCount, tipPercent }) {
    const tipAmount = (billAmount * (tipPercent / 100)) / peopleCount;
    return tipAmount.toFixed(2);
  }

  function calculateTotalPerPerson({ billAmount, peopleCount, tipPercent }) {
    const totalPerPerson = (billAmount * (1 + tipPercent / 100)) / peopleCount;
    return totalPerPerson.toFixed(2);
  }

  useEffect(() => {
    if (
      inputState.billAmount &&
      inputState.peopleCount &&
      inputState.tipPercent
    ) {
      setResultState((prevState) => ({
        ...prevState,
        tipAmount: calculateTipAmount(inputState),
        totalPerPerson: calculateTotalPerPerson(inputState),
      }));
    }
  }, [inputState]);

  return (
    <div className="w-full rounded-t-3xl bg-White px-6 py-8 text-[16px] md:flex md:gap-8 md:rounded-3xl md:p-8">
      <InputForm setInputState={setInputState} />
      <Result resultState={resultState} />
    </div>
  );
};
export default Calculator;
