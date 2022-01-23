import React, { FC } from 'react';

import { SafeAreaView, Text, View } from 'react-native';
import { Question } from '@core/types/Exercise';
import { ANSWER_TOKEN } from '@core/constants';
import {SpaceVertical,
  TranslatedHint,
  Word,
  WordToGuess,
} from '@common/components';
import { useExercise } from '@core/hooks';
import style from './styles';

const ExerciseScreen: FC = () => {
  const { exercise } = useExercise();

  const question = React.useMemo(() => {
    if (exercise) {
      return exercise.questions[0] as Question;
    }
    return null;
  }, [exercise]);

  const quiz = React.useMemo(
    () => (
      <View style={style.quizContainer}>
        {question?.words.map((word, index) => {
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
    [question],
  );

  const choices = React.useMemo(
    () => (
      <View>
        {question?.choices.map((choice: string) => (
          <Text key="choice">{choice}</Text>
        ))}
      </View>
    ),
    [question],
  );

  if (!question) return <View />;

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
