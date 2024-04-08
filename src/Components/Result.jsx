/* eslint-disable react/prop-types */

const Result = ({
  resultState: { tipAmount, totalPerPerson },
  handleReset,
}) => {
  return (
    <div className="mt-5 flex w-full flex-col rounded-xl bg-VeryDarkCyan p-5 text-White md:mt-0 md:basis-1/2 md:p-11">
      <div className="flex items-center justify-between md:mt-5">
        <h2>
          Tip Amount
          <span className="block text-base text-GrayishCyan">/ person</span>
        </h2>
        <p className="text-4xl text-StrongCyan lg:text-5xl">
          &#36;{tipAmount || "0.00"}
        </p>
      </div>

      <div className="my-6 flex justify-between md:mt-12">
        <h2>
          Total
          <span className="block text-base text-GrayishCyan">/ person</span>
        </h2>
        <p className="text-4xl text-StrongCyan lg:text-5xl">
          &#36;{totalPerPerson || "0.00"}
        </p>
      </div>

      <button
        className="mt-auto inline-block w-full rounded-lg bg-StrongCyan px-4 py-3 font-bold uppercase text-VeryDarkCyan transition-colors duration-300 hover:bg-LightGrayishCyan focus:bg-LightGrayishCyan"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};
export default Result;
