// eslint-disable-next-line react/prop-types
const Result = ({ resultState: { tipAmount, totalPerPerson } }) => {
  return (
    <div className="mt-5 flex w-full flex-col rounded-xl bg-VeryDarkCyan p-5 text-White md:mt-0 md:basis-1/2 md:p-9 ">
      <div className="flex items-center justify-between">
        <h3>
          Tip Amount
          <span className="block text-base text-GrayishCyan">/ person</span>
        </h3>
        <p className="text-5xl text-StrongCyan">&#36;{tipAmount}</p>
      </div>

      <div className="my-6 flex justify-between md:my-16">
        <h3>
          Total
          <span className="block text-base text-GrayishCyan">/ person</span>
        </h3>
        <p className="text-5xl text-StrongCyan">&#36;{totalPerPerson}</p>
      </div>

      <button className="mt-auto inline-block w-full rounded-lg bg-StrongCyan px-4 py-3 font-bold uppercase text-VeryDarkCyan hover:bg-LightGrayishCyan focus:bg-LightGrayishCyan">
        Reset
      </button>
    </div>
  );
};
export default Result;
