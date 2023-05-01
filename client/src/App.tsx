import "./App.css";
import Upload from "./Pages/Upload/Upload";
import LoadingIndicator from "./Components/LoadingIndicator/LoadingIndicator";
import Successfully from "./Pages/Successfully/Successfully";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "./Redux/store/store";

function App() {
  const imageStage = useSelector( (state: RootState) => state?.image.stage)
  const classStyles =
  imageStage === "empty"
      ? "bodyComponent"
      : imageStage === "submit"
      ? "bodyComponent loading"
      : "bodyComponent successfully";

  return (
    <div className="App">
      <div className={classStyles}>
        {imageStage === "empty" && <Upload />}
        {imageStage === "submit" && <LoadingIndicator />}
        {imageStage === "loaded" && <Successfully />}
      </div>
    </div>
  );
}

export default App;
