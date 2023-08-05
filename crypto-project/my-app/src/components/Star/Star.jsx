import styles from "./styles.module.css";
import WhiteStar from "./img/white-star.png";
import YellowStar from "./img/yellow-star.png";
import { addToWatchList, deleteFromWatchList } from "../../store/toolkitSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
// import { MDCTooltip } from "@material/tooltip";
import { Tooltip } from "@mui/material";

export const Star = ({ asset }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.toolkit.selectedCoins);
  const starClick = () => {
    if (!(asset.name in selected)) {
      dispatch(addToWatchList(asset));
    } else {
      dispatch(deleteFromWatchList(asset.name));
    }
  };

  return (
    <>
      <Tooltip title='Add to watch list'>
        <img
          aria-describedby="tooltip-id"
          onClick={starClick}
          className={styles.img_star}
          src={asset.name in selected ? YellowStar : WhiteStar}
        />
      </Tooltip>
    </>
  );
};
