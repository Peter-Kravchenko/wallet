import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4vw;
  font-family: 'SegoeUIRegular';
  background-color: #fff;
  border-radius: 30px;
  height: 200px;
`;

const CardHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  margin: 4vw;
`;

const CardNameWrapper = styled.p`
  font-size: 10vw;
`;

const CardImageWrapper = styled.img`
  margin: 4vw 4vw 2vw 0;
  max-width: 15vw;
`;
const CardMainTextWrapper = styled.div`
  display: flex;
  margin: 4vw;
`;

function Card(): JSX.Element {
  return (
    <CardWrapper>
      <CardHeaderWrapper>
        <CardNameWrapper>Name</CardNameWrapper>
        <CardImageWrapper src="src/assets/img/logo.png" />
      </CardHeaderWrapper>
      <CardMainTextWrapper>Text Text</CardMainTextWrapper>
    </CardWrapper>
  );
}

export default Card;
