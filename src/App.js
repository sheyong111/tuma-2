import "./App.scss";
import Index from "./router/router";

function App() {
  require("dotenv").config({ path: ".env" });

  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
