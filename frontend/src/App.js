import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
      </div>

  );
}

export default App;
