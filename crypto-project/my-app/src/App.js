import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { WatchListPage } from "./pages/WatchListPage/WatchListPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route index element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
            <Route path="/watchlist" element={<WatchListPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
