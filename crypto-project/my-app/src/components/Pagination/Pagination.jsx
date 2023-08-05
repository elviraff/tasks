import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setAssetsOnPage } from "../../store/toolkitSlice";
import styles from "./styles.module.css";

export const PaginationApp = () => {
  const dispatch = useDispatch();
  const count = 10;
  const assets = useSelector((state) => state.toolkit.assets);
  const pages = assets.length / count;

  let from = 0;
  let to = count;

  const handlePage = (event, page) => {
    from = count * (page - 1) + 1;
    to = from + count - 1;
    dispatch(setAssetsOnPage(assets.slice(from - 1, to)));
  };

  return (
    <div className={styles.main}>
      <Pagination
        
        count={pages}
        shape="rounded"
        onChange={handlePage}
      />
    </div>
  );
};
