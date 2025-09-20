import styles from './QuestionInfo.module.css';

function QuestionInfo({ question }) {
  return (
    <div className={styles.questionInfo}>
    
      
      <div className={styles.infoContent}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Subject:</span>
          <span className={styles.value}>{question.subject}</span>
        </div>
        
        <div className={styles.infoItem}>
          <span className={styles.label}>Marks:</span>
          <span className={styles.value}>+{question.marks}</span>
        </div>
        
        {question.negativeMarks > 0 && (
          <div className={styles.infoItem}>
            <span className={styles.label}>Negative:</span>
            <span className={styles.negativeValue}>-{question.negativeMarks}</span>
          </div>
        )}
        
        <div className={styles.infoItem}>
          <span className={styles.label}>Type:</span>
          <span className={styles.value}>{question.type}</span>
        </div>
        
 
      </div>
    </div>
  );
}

export default QuestionInfo;
