import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome to GatePixels</h1>
        <h2 className={styles.subtitle}>Test Your Knowledge</h2>
        <p className={styles.description}>
          Practice with real GATE questions and improve your scores
        </p>
        <button 
          className={styles.startButton}
          onClick={() => navigate('/ExamPage')}
        >
          START EXAM
        </button>
      </div>
    </div>
  );
}

export default Home;
