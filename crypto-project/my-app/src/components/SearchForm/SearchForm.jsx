import { useDispatch } from "react-redux";
import { setSearch } from "../../store/toolkitSlice";


export const SearchForm = ({className}) => {
    const dispatch = useDispatch()
  return (
    <div>
      <input
      className={className}
        placeholder="search..."
        onChange={(e) => {
          dispatch(setSearch(e.currentTarget.value))
        }}
      ></input>
    </div>
  );
};
