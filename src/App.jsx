import "./App.css";
import ShortCircuit from "./components/shortCircuit/ShortCircuit";
import ShortCircuitExample from "./components/shortCircuit/ShortCircuitExample";
import ControlledForm from "./components/form/controlledForm/ControlledForm";
import MultipleInput from "./components/form/controlledForm/MultipleInput";
import UserChallenge from "./components/form/controlledForm/UserChallenge";

const App = () => {
  return (
    <div className="container">
      <h2>Hello vite</h2>
      <div>
        <ShortCircuit />
        <ShortCircuitExample />
        <ControlledForm />
        <MultipleInput/>
        <UserChallenge/>
      </div>
    </div>
  );
};

export default App;
