import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Table } from "../../components/table/Table";
import { tableHeaders } from "../../constants/tableHeaders";
import { deleteFromWatchListCheckBox } from "../../store/toolkitSlice";
import styles from "./styles.module.css";

export const WatchListPage = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.toolkit.watchList);
  const listForDeleting = useSelector(
    (state) => state.toolkit.selectedCoinsForDeleting,
  );

  const deleteList = () => {
    if (listForDeleting.length > 1) {
      alert("het");
    }
    dispatch(deleteFromWatchListCheckBox(listForDeleting));
  };
  return (
    <>
      {watchlist.length ? (
        <div className={styles.main}>
          <Table
            tableHeaders={tableHeaders}
            assets={watchlist}
            type={"watchList"}
          />
          <Button className={styles.watch_button} onClick={deleteList}>
            Delete from watch list
          </Button>
        </div>
      ) : (
        <div>No favourite coins yet</div>
      )}
    </>
  );
};
