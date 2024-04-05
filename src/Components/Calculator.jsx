import { useCallback, useEffect, useState } from "react";
import InputForm from "./InputForm";
import Result from "./Result";

const Calculator = () => {
  const [inputState, setInputState] = useState({});
  const [resultState, setResultState] = useState({});
  const [isResetBtnClicked, setIsResetBtnClicked] = useState(false);

  const calculateTipAmount = useCallback(
    ({ billAmount, peopleCount, tipPercent }) => {
      const tipAmount = (billAmount * (tipPercent / 100)) / peopleCount;
      return tipAmount.toFixed(2);
    },
    [],
  );

  const calculateTotalPerPerson = useCallback(
    ({ billAmount, peopleCount, tipPercent }) => {
      const totalPerPerson =
        (billAmount * (1 + tipPercent / 100)) / peopleCount;
      return totalPerPerson.toFixed(2);
    },
    [],
  );

  function handleReset() {
    setIsResetBtnClicked(true);
    setInputState({});
    setResultState({});
  }

  useEffect(() => {
    if (
      inputState.billAmount &&
      inputState.peopleCount &&
      inputState.tipPercent
    ) {
      setResultState({
        tipAmount: calculateTipAmount(inputState),
        totalPerPerson: calculateTotalPerPerson(inputState),
      });
    }
    if (isResetBtnClicked) {
      setIsResetBtnClicked(false);
    }
  }, [
    inputState,
    isResetBtnClicked,
    calculateTipAmount,
    calculateTotalPerPerson,
  ]);

  return (
    <div className="w-full rounded-t-3xl bg-White px-6 py-8 md:flex md:gap-8 md:rounded-3xl md:p-8">
      <InputForm
        setInputState={setInputState}
        isResetBtnClicked={isResetBtnClicked}
      />
      <Result resultState={resultState} handleReset={handleReset} />
    </div>
  );
};
export default Calculator;
