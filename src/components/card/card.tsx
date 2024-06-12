import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4vw;
  font-family: 'SegoeUIRegular';
  background-color: #fff;
  border-radius: 30px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  margin: 4vw;
`;

const NameWrapper = styled.p`
  font-size: 10vw;
`;

const ImageWrapper = styled.img`
  margin: 4vw 4vw 2vw 0;
  max-width: 15vw;
`;
const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4vw;
  border-bottom: 1px solid #efefef;
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const PointsWrapper = styled.p`
  font-size: 6vw;
  margin-right: 2vw;
`;

const PointsText = styled.p`
  font-size: 4vw;
`;

const InfoWrapper = styled.p`
  font-size: 2vw;
  margin-bottom: 2vw;
`;

const InfoWrapperData = styled.p`
  font-size: 4vw;
  margin-bottom: 2vw;
`;

const InfoRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20vw;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vw 4vw 4vw 0;
`;

const ActionsButtonWrapper = styled.img`
  margin-right: 20vw;
  width: 8vw;
  height: 8vw;
  background-color: black;
`;

const DetailsButtonWrapper = styled.button`
  font-size: 4vw;
  background-color: #efefef;
  border: none;
  border-radius: 15px;
  padding: 3vw;
`;

function Card(): JSX.Element {
  return (
    <CardWrapper>
      <HeaderWrapper>
        <NameWrapper>Name</NameWrapper>
        <ImageWrapper src="src/assets/img/logo.png" />
      </HeaderWrapper>
      <MainTextWrapper>
        <RowWrapper>
          <PointsWrapper>200</PointsWrapper>
          <PointsText>баллов</PointsText>
        </RowWrapper>
        <RowWrapper>
          <InfoRowWrapper>
            <InfoWrapper>Кэшбэк</InfoWrapper>
            <InfoWrapperData>1%</InfoWrapperData>
          </InfoRowWrapper>
          <InfoRowWrapper>
            <InfoWrapper>Уровень</InfoWrapper>
            <InfoWrapperData>Базовый уровень тест</InfoWrapperData>
          </InfoRowWrapper>
        </RowWrapper>
      </MainTextWrapper>
      <ButtonsWrapper>
        <ActionsButtonWrapper src="src/assets/img/eye_white.png"></ActionsButtonWrapper>
        <ActionsButtonWrapper src="src/assets/img/trash_white.png"></ActionsButtonWrapper>
        <DetailsButtonWrapper>Подробнее</DetailsButtonWrapper>
      </ButtonsWrapper>
    </CardWrapper>
  );
}

export default Card;
