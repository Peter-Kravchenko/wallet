import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

const LoadingScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4vw;
`;

const SpinnerTextWrapper = styled.p`
  margin-top: 2vw;
  font-size: 6vw;
  margin-left: 2vw;
  color: #1a1a1a;
`;

function Loader() {
  return (
    <LoadingScreenWrapper>
      <Spinner
        animation="border"
        role="status"
        style={{ width: '20vw', height: '20vw' }}
      ></Spinner>
      <SpinnerTextWrapper>Подгрузка компаний</SpinnerTextWrapper>
    </LoadingScreenWrapper>
  );
}

export default Loader;
