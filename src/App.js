import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

import TextForm from "./components/TextForm";
import About from "./components/About";
import Contact from "./components/Contact";
import Homepage from "./components/Home";

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
      {/* <Navbar title="promoCodes" modes={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyse below"
        modes={mode}
      />
      <About />
      <Contact /> */}
      <BrowserRouter>
        <Navbar title="promoCodes" modes={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            path="/textform"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyse below"
                modes={mode}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
