import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/";
import TweetsPage from "./pages/TweetsPage";
import { Layout } from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index path="/" element={<HomePage />} />
          <Route exact path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
