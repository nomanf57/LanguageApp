import React, { FC } from 'react';
import { Question } from '@core/types/Exercise';
import { Text, StyleSheet, View } from 'react-native';
import { ANSWER_TOKEN } from '@core/constants';

type LevelItemProps = {
  question: Question;
};

const TranslatedHint: FC<LevelItemProps> = ({ question }) => {
  const isLastWord = React.useCallback(
    (index: number) => index === question.words.length - 1,
    [question],
  );

  return (
    <View style={style.hintContainer}>
      {question.words.map((word, index) => {
        const value = Object.values(word)[0] as string;

        if (value === ANSWER_TOKEN) {
          return (
            <Text style={style.answerInHint}>
              {question.answer}
              {isLastWord(index) ? '.' : ' '}
            </Text>
          );
        }

        return (
          <Text key={value}>
            {value}
            {isLastWord(index) ? '.' : ' '}
          </Text>
        );
      })}
    </View>
  );
};
const style = StyleSheet.create({
  hintContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  answerInHint: {
    fontSize: 18,
    fontWeight: '800',
  },
});

export default TranslatedHint;
