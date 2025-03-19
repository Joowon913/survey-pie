import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressBar from '../../components/ProgressBar';
import QuestionBox from '../../components/QuestionBox';

function SurveyPage() {
  const params = useParams();
  const questions = [
    {
      title: '질문1 입니다.',
      desc: '설명1 입니다.',
      type: 'text',
      required: false,
      option: {},
    },
    {
      title: '질문2 입니다.',
      desc: '설명2 입니다.',
      type: 'text',
      required: true,
      option: {},
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  return (
    <div>
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

export default SurveyPage;
