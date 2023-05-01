import { RootState } from "../../Redux/store/store";
import "./LinkCopy.css";
import { useSelector } from "react-redux/es/exports";

function LinkCopy() {
  const imageUrl = useSelector((state: RootState) => state.image.imageUrl);
  return (
    <div className="LinkCopy">
      <span className="LinkCopy__link">{imageUrl}</span>
      <button className="LinkCopy__button">Copy Link</button>
    </div>
  );
}

export default LinkCopy;
