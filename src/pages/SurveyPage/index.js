import { Suspense } from 'react';
import styled from 'styled-components';

import ProgressBar from '../../components/ProgressBar';
import QuestionBox from '../../components/QuestionBox';

function SurveyPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <SurveyPageWrapper>
        <ProgressBar />
        <QuestionBox />
      </SurveyPageWrapper>
    </Suspense>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
