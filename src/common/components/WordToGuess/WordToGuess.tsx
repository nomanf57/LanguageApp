import React, { FC } from 'react';
import { WorkWithTranslation } from '@core/types/Exercise';
import { StyleSheet, Text, View } from 'react-native';
import SpaceHorizontal from '../SpaceHorizontal/SpaceHorizontal';

type WordToGuessProps = {
  word: WorkWithTranslation;
  isLastWord: boolean;
};

const WordToGuess: FC<WordToGuessProps> = ({ word, isLastWord }) => {
  const key = Object.keys(word)[0] as string;

  return (
    <>
      <View style={style.quizWord}>
        <Text key={key} />
      </View>
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
    width: 100,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export default WordToGuess;
