import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScoreCounter from "../components/ScoreCounter";
import scoreStyles from '../components/ScoreCounter.module.css';
import styles from './ThankYou.module.css';
import { useEffect, useState, useRef } from "react";
import { saveScore, getTopScores } from "../firebase/firestore";


function Thankyou() {
  const navigate = useNavigate();
  const hasSaved = useRef(false);
  const location = useLocation();
  const { answers = {}, questions = [], examCategory, selectedPaper } = location.state || {};
  const [userName, setUserName] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);

useEffect(() => {
  const storedName = localStorage.getItem("userName");
  const storedScore = localStorage.getItem("finalScore");
  const alreadySaved = localStorage.getItem("scoreSaved");

  if (storedName) {
    setUserName(storedName);
  }
/*
  // Use the score from localStorage (calculated by ScoreCounter)
  if (storedName && storedScore &&!hasSaved.current) {
    saveScore(storedName, parseFloat(storedScore), examCategory, selectedPaper);
    hasSaved.current = true; // Add this line
  }

*/
  if (storedName && storedScore && !alreadySaved) {
    saveScore(storedName, parseFloat(storedScore), examCategory, selectedPaper);
    localStorage.setItem("scoreSaved", "true");
  }

  // Load leaderboard
  const loadLeaderboard = async () => {
    const scores = await getTopScores();
    setLeaderboard(scores);
  };
  loadLeaderboard();
}, [examCategory, selectedPaper]);



  return (
    <div className={styles.container}>
      <div className={styles.card}>

        <h1 className={styles.title}>
          Thank You!
        </h1>


        <h2 className={styles.subtitle}>Exam Completed Successfully</h2>

        <h2 className={styles.subtitle}> {userName ? ` ${userName}` : ""}' Final Score:</h2>

        <div className={scoreStyles.cardScore}>

          <ScoreCounter answers={answers} questions={questions} />

        </div>
        


       <div className={styles.leaderboard}>
         <h2 className={styles.subtitle}>Top Scores</h2>
        {leaderboard.slice(0, 10).map((entry, index) => (
          <div key={index} className={styles.leaderboardItem}>
            <p><strong>
              {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`} {entry.name}:
            </strong> {entry.score} marks</p>
          </div>
         ))}
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
