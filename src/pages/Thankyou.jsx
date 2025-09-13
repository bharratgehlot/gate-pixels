import { useNavigate } from "react-router-dom";

function Thankyou() {
  const navigate = useNavigate()
  
  return (
    <div className="container">
      <div className="card text-center">
        <h1 className="mb-3">Thank You!</h1>
        <h2 className="mb-4">Exam Completed Successfully</h2>
        
        <div className="mb-4">
          <h2 className="mb-3">Current Leaderboard</h2>
          <div className="mb-2">
            <p><strong>🥇 User 1:</strong> 50 marks</p>
          </div>
          <div className="mb-2">
            <p><strong>🥈 User 3:</strong> 30 marks</p>
          </div>
          <div className="mb-2">
            <p><strong>🥉 User 5:</strong> 08 marks</p>
          </div>
        </div>
        
        <button 
          className="mt-3" 
          onClick={() => navigate('/')}
        >
          Take Another Test
        </button>
      </div>
    </div>
  );
}

export default Thankyou;
