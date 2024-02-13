import ToggleText from "./components/ToggleText";
import Clicker from "./components/Clicker";
import Counter from "./components/Counter";
import CounterWithStep from "./components/CounterWithStep";
import TextFieldForm from "./components/TextFieldForm";

function App() {
  return (
    <div>
      <Clicker/>
      <Counter/>
      <CounterWithStep/>
      <TextFieldForm/>
      <ToggleText/>
    </div>
  );
}

export default App;
