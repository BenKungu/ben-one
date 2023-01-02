import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import Julie from "./Julie";
import Member from "./Member";

function App() {
  return (
    <div className="App">
      <Member />
      <User />

      <Julie member="kamuro" view="DJ wa mathani ma ruimbo" />
    </div>
  );
}

export default App;
