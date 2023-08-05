import { Table } from "../../components/table/Table";
import { Assets } from "../../components/Assets/Assets";
import { tableHeaders } from "../../constants/tableHeaders";
import { useDispatch, useSelector } from "react-redux";
import { PaginationApp } from "../../components/Pagination/Pagination";
import { setAssetsOnPage } from "../../store/toolkitSlice";
import { useEffect } from "react";

export const MainPage = () => {
  const assets = useSelector((state) => state.toolkit.assets);
  const assetsOnPage = useSelector(state => state.toolkit.assetsOnPage)
  const dispatch = useDispatch()

  
  return (
    <>
      <main className="main">
        <Assets />
        <Table tableHeaders={tableHeaders} assets={assetsOnPage} type={"main"} />
        <PaginationApp />
      </main>
    </>
  );
};
