import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScoreCounter from "../components/ScoreCounter";
import scoreStyles from "../components/ScoreCounter.module.css";
import styles from "./ThankYou.module.css";
import { useEffect, useState } from "react";
import { saveScore, getTopScores } from "../firebase/firestore";
import { filterProfanity } from "../utils/profanityFilter";

function Thankyou() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    answers = {},
    questions = [],
    examCategory,
    selectedPaper,
  } = location.state || {};
  const [userName, setUserName] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(true);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedScore = localStorage.getItem("finalScore");
    const alreadySaved = localStorage.getItem("scoreSaved");

    if (storedName) {
      setUserName(storedName);
    }

    if (storedName && storedScore && !alreadySaved) {
      const totalMarks = questions.reduce((sum,q) => sum + q.marks, 0)
      saveScore(
        storedName,
        parseFloat(storedScore),
        examCategory,
        selectedPaper,
        totalMarks
      );
      localStorage.setItem("scoreSaved", "true");
    }

    // Load leaderboard
    const loadLeaderboard = async () => {
      setLoadingLeaderboard(true);
      const scores = await getTopScores();
      setLeaderboard(scores);
      setLoadingLeaderboard(false);
    };
    loadLeaderboard();
  }, [examCategory, selectedPaper]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Thank You!</h1>

        <h2 className={styles.subtitle}>Exam Completed Successfully</h2>

        <h2 className={styles.subtitle}>
          {" "}
          {userName ? ` ${filterProfanity(userName)}` : ""}' Final Score:
        </h2>

        <div className={scoreStyles.cardScore}>
          <ScoreCounter answers={answers} questions={questions} />
        </div>

        <div className={styles.leaderboard}>
          <h2 className={styles.subtitle}>Current Leaderboard:</h2>
          {loadingLeaderboard ? (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <p>Loading leaderboard...</p>
            </div>
          ) : (
    <table className={styles.leaderboardTable}>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Paper</th>
          <th>Marks</th>
          <th className={styles.dateColumn} >Date</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.slice(0, 10).map((entry, index) => (
          <tr key={index}>
            <td>
              {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
            </td>
            <td>{filterProfanity(entry.name)}</td>
            <td>{entry.examPaper || 'N/A'}</td>

            <td>{Math.round(entry.score * 100) / 100}{entry.totalMarks ? `/${entry.totalMarks}` : ''}</td>
            <td className={styles.dateColumn} >{entry.timestamp ? new Date(entry.timestamp.seconds * 1000).toLocaleDateString() : 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
          }
        </div>

        <button className={styles.button} onClick={() => navigate("/")}>
          Take Another Test
        </button>
      </div>
    </div>
  );
}

export default Thankyou;
