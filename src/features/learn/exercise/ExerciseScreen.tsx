import React, { FC } from 'react';

import { SafeAreaView, Text, View } from 'react-native';
import { Question } from '@core/types/Exercise';
import { ANSWER_TOKEN } from '@core/constants';
import {
  SpaceHorizontal,
  SpaceVertical,
  TranslatedHint,
  Word,
  WordToGuess,
} from '@common/components';
import style from './styles';

const ExerciseScreen: FC = () => {
  const question: Question = {
    answer: 'House',
    choices: ['House', 'One', 'Two'],
    english_translation: 'The house is small.',
    question: 'Das answer_space ist klein',
    status: 'completed',
    words: [
      { Das: 'The' },
      { answer_space: 'answer_space' },
      { ist: 'is' },
      { klein: 'small' },
    ],
  };

  const quiz = React.useMemo(
    () => (
      <View style={style.quizContainer}>
        {question.words.map((word, index) => {
          const key = Object.keys(word)[0] as string;

          if (key === ANSWER_TOKEN) {
            return (
              <WordToGuess
                key={key}
                word={word}
                isLastWord={index !== question.words.length - 1}
              />
            );
          }

          return (
            <Word
              key={key}
              word={word}
              isLastWord={index !== question.words.length - 1}
            />
          );
        })}
      </View>
    ),
    [],
  );

  const choices = React.useMemo(
    () => (
      <View>
        {question.choices.map((choice: string) => (
          <Text key="choice">{choice}</Text>
        ))}
      </View>
    ),
    [question],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <SpaceVertical space={40} />
        <Text>Fill in the missing word</Text>
        <SpaceVertical space={20} />
        <TranslatedHint question={question} />
        <SpaceVertical space={20} />
        <Text>{quiz}</Text>
        <SpaceVertical space={20} />
        <Text>{choices}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ExerciseScreen;
