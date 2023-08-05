import { searchAsset } from "../store/toolkitSlice";

export const Search = (id) => {
  return function (dispatch) {
    fetch(`https://api.coincap.io/v2/assets/?search=${id}`)
      .then((response) => response.json())
      .then((json) => dispatch(searchAsset(json.data)));
  };
};
