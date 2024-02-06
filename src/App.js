import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import History from "./History";
import AddToCard from "./AddToCard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/add-to-card" element={<AddToCard />} />
      </Routes>
    </>
  );
}

export default App;
