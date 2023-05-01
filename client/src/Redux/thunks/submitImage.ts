import { setImage, setStage } from "../slices/image";
import { AppDispatch, RootState } from "../store/store";

export const submitImage = (image : string) => {
  return async (dispatch: AppDispatch, state: RootState) => {

    dispatch(setStage("submit"))

    const response = await fetch("http://localhost:3010/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: image }),
    });

    if(response.ok) {
      dispatch(setStage("loaded"))
    }

    const responseBody = await response.json()

    dispatch(setImage(responseBody.url))

  }
}