import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScoreCounter from "../components/ScoreCounter";
import scoreStyles from '../components/ScoreCounter.module.css';
import styles from './ThankYou.module.css';


function Thankyou() {
  const navigate = useNavigate();
  const location = useLocation();
  const { answers = {}, questions = [] } = location.state || {};
  
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Thank You!</h1>
        <h2 className={styles.subtitle}>Exam Completed Successfully</h2>
        <h2 className={styles.subtitle}>Your Final Score:</h2>
        <div className={scoreStyles.cardScore}>
          <ScoreCounter answers={answers} questions={questions} />
        </div>
        
        <div className={styles.leaderboard}>
          <h2 className={styles.subtitle}>Current Leaderboard</h2>
          <div className={styles.leaderboardItem}>
            <p><strong>🥇 User 1:</strong> 50 marks</p>
          </div>
          <div className={styles.leaderboardItem}>
            <p><strong>🥈 User 3:</strong> 30 marks</p>
          </div>
          <div className={styles.leaderboardItem}>
            <p><strong>🥉 User 5:</strong> 08 marks</p>
          </div>
        </div>
        
        <button 
          className={styles.button}
          onClick={() => navigate('/')}
        >
          Take Another Test
        </button>
      </div>
    </div>
  );
}

export default Thankyou;
