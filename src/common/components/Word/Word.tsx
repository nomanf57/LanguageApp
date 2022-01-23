import React, { FC } from 'react';
import { WorkWithTranslation } from '@core/types/Exercise';
import { Text, StyleSheet, View, Alert, TouchableOpacity } from 'react-native';
import SpaceHorizontal from '../SpaceHorizontal/SpaceHorizontal';

type WordProps = {
  word: WorkWithTranslation;
  isLastWord: boolean;
};

const Word: FC<WordProps> = ({ word, isLastWord }) => {
  const key = Object.keys(word)[0] as string;

  const onWordPress = React.useCallback(() => {
    Alert.alert(word[key]);
  }, []);

  return (
    <>
      <TouchableOpacity key={key} style={style.quizWord} onPress={onWordPress}>
        <Text>{key}</Text>
      </TouchableOpacity>
      {isLastWord && <SpaceHorizontal space={10} />}
    </>
  );
};
const style = StyleSheet.create({
  quizContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quizWord: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
});

export default Word;
