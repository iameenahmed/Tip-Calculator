import Calculator from "./Components/Calculator";
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <main className="font-SpaceMono md:px-10 lg:w-[57.5rem] lg:px-0">
      <h1 className="sr-only">Tip Calculator</h1>
      <div className="my-12 flex place-content-center md:mb-[8.7vh] md:mt-[16vh]">
        <img src={logo} alt="splitter logo" />
      </div>
      <Calculator />
    </main>
  );
};
export default App;
// 10.125rem
