import { countModification } from "../../utils/countModification";
import { Cell } from "../cell/Cell";
import { Row } from "../row/Row";
import styles from "./styles.module.css";

export const Table = ({tableHeaders, assets, type}) => {

  return (
    <table className={styles.table}>
      <thead>
        <tr>
            {tableHeaders.map((item, index) => <th key = {index} ><div>{item}</div></th>)}
        </tr>
      </thead>
      <tbody>
        {assets.map((item) => (
          <Row key={item.id} asset={item} type = {type}/>
        ))}
      </tbody>
    </table>
  );
};
