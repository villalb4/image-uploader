import React from "react";
import "./App.css";
import Upload from "./Pages/Upload/Upload";
import LoadingIndicator from "./Components/LoadingIndicator/LoadingIndicator";
import Successfully from "./Pages/Successfully/Successfully";

function App() {
  const hola: string = "hola";
  const classStyles =
    hola === "hola"
      ? "bodyComponent"
      : hola === "chau"
      ? "bodyComponent loading"
      : "bodyComponent successfully";
      
  return (
    <div className="App">
      <div className={classStyles}>
        {hola === "hola" && <Upload />}
        {hola === "chau" && <LoadingIndicator />}
        {hola === "hi" && <Successfully />}
      </div>
    </div>
  );
}

export default App;
