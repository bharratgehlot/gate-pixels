import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamPage from "./pages/ExamPage";
import Thankyou from "./pages/Thankyou";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ExamPage" element={<ExamPage />} />
        <Route path="/Thankyou" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
