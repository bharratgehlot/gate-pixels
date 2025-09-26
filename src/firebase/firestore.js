import { collection, addDoc, getDocs, orderBy, query, limit } from 'firebase/firestore';
import { db } from './config';

export const saveScore = async (userName, score, examType, examPaper) => {
  try {
    await addDoc(collection(db, 'scores'), {
      name: userName,
      score: score,
      examType: examType,
      examPaper: examPaper,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('Error saving score:', error);
  }
};

export const getTopScores = async () => {
  try {
    const q = query(collection(db, 'scores'), orderBy('score', 'desc'), limit(10));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error getting scores:', error);
    return [];
  }
};
