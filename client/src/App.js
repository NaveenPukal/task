import logo from "./logo.svg";
import "./App.css";
import InputEmployee from "./components/InputEmployee";
import ListEmployee from "./components/ListEmployee";

function App() {
  return (
    <div className="page">
      <div className="container">
        <InputEmployee />
        <ListEmployee />
      </div>
    </div>
  );
}

export default App;
