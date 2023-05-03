import { RootState } from "../../Redux/store/store";
import "./Preview.css"
import { useSelector } from "react-redux/es/exports";

function Preview() {

  const image = useSelector((state: RootState) => state.image.imageUrl)

  return (
    <div className='preview'>
      <div className='preview_divContainer'>
        <img className='preview_image' src={image} alt="imagen cargada" />
      </div>
    </div>
  )
}

export default Preview