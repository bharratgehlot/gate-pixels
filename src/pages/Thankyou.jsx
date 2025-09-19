import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScoreCounter from "../components/ScoreCounter";
import styles from '../components/ScoreCounter.module.css';


function Thankyou() {
  const navigate = useNavigate();
  const location = useLocation();
  const { answers = {}, questions = [] } = location.state || {};
  
  return (
    <div className="container">
      <div className="card text-center">
        <h1 className="mb-3">Thank You!</h1>
        <h2 className="mb-4">Exam Completed Successfully</h2>
        <h2>Your Final Score:</h2>
     <div className={styles.cardScore}>
          <ScoreCounter answers={answers} questions={questions} />
        </div>

        
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
