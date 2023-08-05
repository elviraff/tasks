import { useDispatch, useSelector} from "react-redux";
import { useCallback, useEffect} from 'react';

import { Search } from "../../async/search";
import { getAssets } from "../../async/getAssets";
import { debouncer } from "../../utils/debouncer";

export const Assets = () => {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.toolkit.search);
  

    const findAsset = useCallback(async (str) => {
      try {
        dispatch(Search(str));
      } catch (e) {
        console.error(e);
      }
    }, []);
  
    useEffect(() => {
      dispatch(getAssets());

    }, []);
  
    const debouncedFindAsset = useCallback(debouncer(findAsset, 1000), []);
  
    useEffect(() => {
      debouncedFindAsset(search);
    }, [search]);
    return (
        <>
        </>
    )
}