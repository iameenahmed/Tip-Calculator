import Calculator from "./Components/Calculator";
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <main className="font-SpaceMono lg:w-[57.5rem]">
      <h1 className="sr-only">Tip Calculator</h1>
      <div className="my-10 flex place-content-center md:mb-[5.25rem] md:mt-0">
        <img src={logo} alt="splitter logo" />
      </div>
      <Calculator />
    </main>
  );
};
export default App;
