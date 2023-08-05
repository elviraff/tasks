import { Cell } from "../cell/Cell";
import { countModification } from "../../utils/countModification";

export const TableRows = ({asset}) => {
  return (
    <>
      <Cell element={asset.rank} />
      <Cell element={asset.name} />
      <Cell element={countModification(asset.priceUsd)} />
      <Cell element={countModification(asset.marketCapUsd)} />
      <Cell element={countModification(asset.vwap24Hr)} />
      <Cell element={countModification(asset.supply)} />
      <Cell element={countModification(asset.volumeUsd24Hr)} />
      <Cell element={countModification(asset.changePercent24Hr)} />
    </>
  );
};
