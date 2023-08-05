import { addAssets } from "../store/toolkitSlice";

export const getAssets = () => {
  return function (dispatch) {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => response.json())
      .then((json) => dispatch(addAssets(json.data)));
    // .then(json => console.log(json.data))
  };
};
