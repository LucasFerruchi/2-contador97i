import "./App.css";
import Contador from "./components/Contador.jsx";

function App() {
  return (
    <>
      <Contador inicialState={5} />
      <Contador inicialState={10} />
      <Contador inicialState={0} />
    </>
  );
}

export default App;
