import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <Navbar title="promoCodes" modes={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyse below" />
      {/* <About /> */}
    </>
  );
}

export default App;
