import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const ExamPage = lazy(() => import("./pages/ExamPage"));
const Thankyou = lazy(() => import("./pages/Thankyou"));


function App() {
  return (
    <BrowserRouter>
  <Suspense fallback={
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '18px'
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            border: '3px solid #f3f3f3',
            borderTop: '3px solid #007bff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginRight: '10px'
          }}></div>
          Loading...
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      }>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ExamPage" element={<ExamPage />} />
        <Route path="/Thankyou" element={<Thankyou />} />
      </Routes>
</Suspense>
    </BrowserRouter>
  );
}

export default App;
