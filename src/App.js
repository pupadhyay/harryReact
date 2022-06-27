import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  return (
    <>
      <Navbar title="promoCodes" mode={mode} />
      <TextForm heading="Enter the text to analyse below" />
      {/* <About /> */}
    </>
  );
}

export default App;
