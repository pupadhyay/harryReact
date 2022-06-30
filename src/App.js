import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#444444";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="promoCodes" modes={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyse below"
        modes={mode}
      />
      <About />
    </>
  );
}

export default App;
