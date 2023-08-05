import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { NavBar } from "../NavBar/NavBar";
import styles from "./styles.module.css";
import classNames from "classnames";
import { months } from "../../constants/months";
import { years } from "../../constants/years";
import { useDispatch } from "react-redux";
import { addToBalance } from "../../store/toolkitSlice";
import { Button } from "../Button/Button";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [modalActive, setModalActive] = useState(false);

  const onButtonClick = () => {
    dispatch(addToBalance(amount));
    alert(`${amount} successfully added!`);
  };
  return (
    <div className="root">
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={styles.modal_window}>
          <div className={styles.modal_header}>
            <span className={styles.modal_header_text}>
              {" "}
              Credit card detail
            </span>
          </div>
          <input
            placeholder="Card number"
            className={classNames(
              styles.modal_content_card_number,
              styles.modal_content,
            )}
          />
          <div className={styles.modal_content}>
            <select className={styles.modal_content_element}>
              {months.map((item) => (
                <option>{item}</option>
              ))}
            </select>
            <select className={styles.modal_content_element}>
              {years.map((item) => (
                <option>{item}</option>
              ))}
            </select>
          </div>
          <div className={styles.modal_content}>
            <input className={styles.modal_content_element} placeholder="CVV" />
            <div className={styles.modal_content_text}>
              3 or 4 digits on signature strip
            </div>
          </div>
          <div className={styles.modal_content}>
            <input
              placeholder="1000"
              className={styles.modal_content_element}
              onChange={(e) => {
                setAmount(e.currentTarget.value);
              }}
              value={amount}
            />
            <Button onClick={onButtonClick} className={styles.modal_button}>
              Add to wallet
            </Button>
          </div>
        </div>
      </Modal>
      <div className="container">
        <div className="adv">
          {" "}
          <span className="adv-text">some adv</span>
        </div>
        <NavBar setActive={setModalActive} />

        {children}
      </div>
      <footer>footer</footer>
    </div>
  );
};
