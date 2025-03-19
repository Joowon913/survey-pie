import { useState } from 'react';

import ProgressBar from './components/ProgressBar';
import QuestionBox from './components/QuestionBox';

function App() {
  const questions = [
    {
      title: '질문1 입니다.',
      desc: '설명1 입니다.',
      type: 'text',
      required: false,
      option: {},
    },
    {
      title: '질문1 입니다.',
      desc: '설명1 입니다.',
      type: 'text',
      required: true,
      option: {},
    },
  ];

  const step = 1;

  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      <ProgressBar />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answers={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers; 
          });
        }}
      />
    </div>
  );
}

export default App;
