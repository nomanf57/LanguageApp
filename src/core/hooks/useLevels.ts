import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { Level } from '@core/types/Level';

const useLevels = () => {
  const [levels, setLevels] = React.useState<Level[]>([]);

  React.useEffect(() => {
    const subscriber = firestore()
      .collection('levels')
      .onSnapshot(documentSnapshot => {
        setLevels(documentSnapshot.docs[0].data().levels as Level[]);
      });

    return () => subscriber();
  }, []);

  return { levels };
};

export default useLevels;
