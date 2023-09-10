import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>

  );
}

export default App;
