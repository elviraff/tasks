import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WatchListPage } from "../../pages/WatchListPage/WatchListPage";
import { Button } from "../Button/Button";
import { SearchForm } from "../SearchForm/SearchForm";
import styles from "./styles.module.css";

export const NavBar = ({ setActive }) => {
  const balance = useSelector((state) => state.toolkit.balance);
  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.nav_link} to="/">
          Coin Market
        </Link>
        <Link className={styles.nav_link} to="/watchlist">
          Watch list
        </Link>
        <Button
          className={styles.nav_button}
          onClick={() => {
            setActive(true);
          }}
        >
          Add money
        </Button>

        <div className={styles.nav_wallet}>{`${balance}$`}</div>
        <SearchForm className={styles.nav_search} />
      </nav>
    </>
  );
};
