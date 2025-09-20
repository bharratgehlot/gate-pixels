import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="card text-center">
        <h1 className="mb-3">Welcome to GatePixels</h1>
        <h2 className="mb-4">Test Your Knowledge</h2>
        <p className="mb-4">
          Practice with real GATE questions and improve your scores
        </p>
        <button 
          className="mt-2" 
          onClick={() => navigate('/ExamPage')}
        >
          START EXAM
        </button>
      </div>
    </div>
  );
}

export default Home;
