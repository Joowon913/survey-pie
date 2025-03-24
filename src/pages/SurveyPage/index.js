import styled from 'styled-components';

import ProgressBar from '../../components/ProgressBar';
import QuestionBox from '../../components/QuestionBox';

function SurveyPage() {
  return (
    <SurveyPageWrapper>
      <ProgressBar />
      <QuestionBox />
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
