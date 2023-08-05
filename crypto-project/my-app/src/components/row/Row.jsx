import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { Star } from "../Star/Star";
import { TableRows } from "../TableRows/TableRows";
import Hide from "./img/hide.png";
import { addToDelete, deleteFromWatchList } from "../../store/toolkitSlice";
import { Tooltip } from "@mui/material";

export const Row = ({ asset, type }) => {
  //   const assetFields = Object.values(asset);
  const dispatch = useDispatch();
  let value = 0;
  const hideClick = () => {
    dispatch(deleteFromWatchList(asset.name));
  };

  const toDelete= () => {
    dispatch(addToDelete(asset.name))
  }

  return (
    <tr className={styles.row}>
      {type == "main" && (
        <td>
          <Star asset={asset} />
        </td>
      )}
      {type == "watchList" && (
        <td>
          <Tooltip title="Delete from watch lsit">
            <img onClick={hideClick} className={styles.hide} src={Hide} />
          </Tooltip>
        </td>
      )}
      <TableRows asset={asset} />
      {type == "watchList" && (
        <td>
          <input type="checkbox" onClick={toDelete}/>
        </td>
      )}
    </tr>
  );
};
