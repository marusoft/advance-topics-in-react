import "./App.css";
import ShortCircuit from "./components/shortCircuit/ShortCircuit";
import ShortCircuitExample from "./components/shortCircuit/ShortCircuitExample";
import ControlledForm from "./components/form/controlledForm/ControlledForm";

const App = () => {
  return (
    <div className="container">
      <h2>Hello vite</h2>
      <div>
        <ShortCircuit />
        <ShortCircuitExample />
        <ControlledForm />
      </div>
    </div>
  );
};

export default App;
