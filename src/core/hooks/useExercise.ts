import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { Exercise } from '@core/types/Exercise';

const useExercise = () => {
  const [exercise, setExercise] = React.useState<Exercise>();

  /**
   * Can pass level as an argument
   */
  React.useEffect(() => {
    const subscriber = firestore()
      .collection('exercise')
      .doc('level_1')
      .onSnapshot(documentSnapshot => {
        setExercise({ questions: documentSnapshot.data()?.exercise });
      });

    return () => subscriber();
  }, []);

  return { exercise };
};

export default useExercise;
