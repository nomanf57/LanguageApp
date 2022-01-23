export declare type QuestionStatus = 'incomplete' | 'completed';

export declare type WorkWithTranslation = { [word: string]: string };
export declare type Question = {
  answer: string;
  choices: string[];
  english_translation: string;
  question: string;
  status: QuestionStatus;
  words: WorkWithTranslation[];
};

export declare type Exercise = {
  questions: Question[];
};
