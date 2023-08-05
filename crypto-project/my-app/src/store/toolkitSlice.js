import { createSlice } from "@reduxjs/toolkit";

export const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    assets: [],
    assetsOnPage: [],
    search: "",
    balance: 0,
    watchList: [],
    selectedCoins: {},
    selectedCoinsForDeleting: []
  },
  reducers: {
    addAssets(state, action) {
      state.assets = action.payload;
      state.assetsOnPage = action.payload.slice(0, 10)
    },
    setAssetsOnPage(state, action) {
      state.assetsOnPage = action.payload;
    },
    searchAsset(state, action) {
      state.assetsOnPage = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    addToWatchList(state, action) {
        if (!(action.payload.name in state.selectedCoins)) {
            state.watchList.push(action.payload)
        }       
        state.selectedCoins[action.payload.name]=action.payload.name
    },
    deleteFromWatchList(state, action) {
        delete state.selectedCoins[action.payload]
        state.watchList = state.watchList.filter(coin => coin.name !== action.payload);       
    },
    addToDelete(state, action) {
        state.selectedCoinsForDeleting.push(action.payload)
    },
    deleteFromWatchListCheckBox(state, action) {
        action.payload.forEach(item => {
            delete state.selectedCoins[item]
            state.watchList = state.watchList.filter(coin => coin.name !== item); 
        })
        state.selectedCoinsForDeleting=[]
    },
    addToBalance(state, action) {
      state.balance += +action.payload
    }
  },
});

export default toolkitSlice.reducer;
export const { addAssets, setAssetsOnPage, searchAsset, setSearch, addToWatchList, deleteFromWatchList, addToDelete, deleteFromWatchListCheckBox, addToBalance } = toolkitSlice.actions;
