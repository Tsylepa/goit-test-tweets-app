import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TweetsPage from "./pages/TweetsPage/TweetsPage";
import { Layout } from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route exact index path="/" element={<HomePage />} />
          <Route exact path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
