import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4vw;
`;

const SpinnerText = styled.p`
  margin-top: 2vw;
  font-size: 6vw;
  color: #1a1a1a;
`;

function Loader() {
  return (
    <LoadingScreen>
      <Spinner
        animation="border"
        role="status"
        style={{ width: '20vw', height: '20vw' }}
      ></Spinner>
      <SpinnerText>Подгрузка компаний</SpinnerText>
    </LoadingScreen>
  );
}

export default Loader;
