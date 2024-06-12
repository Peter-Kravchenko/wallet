import styled from 'styled-components';
import { TCard } from '../../types/cards';
import { CardsDataStore } from '../../store/cards-data-store';
import { useStore } from '../../context/root-store-context';
import { ModalType } from '../../const';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4vw;
  font-family: 'SegoeUIRegular';
  background-color: ${({ background }) => background || '#fff'};
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
  color: ${({ color }) => color || 'black'};
`;

const ImageWrapper = styled.img`
  margin: 4vw 4vw 2vw 0;
  max-width: 15vw;
  border-radius: 50%;
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
  color: ${({ color }) => color || 'black'};
`;

const PointsText = styled.p`
  font-size: 4vw;
  color: ${({ color }) => color || 'black'};
`;

const InfoWrapper = styled.p`
  font-size: 2vw;
  margin-top: 4vw;
  margin-bottom: 2vw;
  color: ${({ color }) => color || 'black'};
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
  background-color: ${(props) => props.color || '#black'};
  border-radius: 50%;
`;

const DetailsButtonWrapper = styled.button`
  font-size: 4vw;
  color: ${({ color }) => color || 'black'};
  background-color: ${({ background }) => background || '#efefef'};
  /* TODO fix */
  border: none;
  border-radius: 15px;
  padding: 3vw;
`;

type TCardProps = {
  card: TCard;
};

function Card({ card }: TCardProps): JSX.Element {
  const { cardsDataStore } = useStore();
  const { mobileAppDashboard, customerMarkParameters } = card;

  const handleButtonClick = (card, type) => {
    cardsDataStore.setCard(card);
    console.log(type);
  };

  return (
    <CardWrapper background={mobileAppDashboard.cardBackgroundColor}>
      <HeaderWrapper>
        <NameWrapper color={mobileAppDashboard.highlightTextColor}>
          {mobileAppDashboard.companyName}
        </NameWrapper>
        <ImageWrapper src={mobileAppDashboard.logo} />
      </HeaderWrapper>
      <MainTextWrapper>
        <RowWrapper>
          <PointsWrapper color={mobileAppDashboard.highlightTextColor}>
            {customerMarkParameters.mark}
          </PointsWrapper>
          <PointsText color={mobileAppDashboard.highlightTextColor}>
            баллов
          </PointsText>
        </RowWrapper>
        <RowWrapper>
          <InfoRowWrapper>
            <InfoWrapper color={mobileAppDashboard.textColor}>
              Кэшбэк
            </InfoWrapper>
            <InfoWrapperData>
              {customerMarkParameters.loyaltyLevel.cashToMark}%
            </InfoWrapperData>
          </InfoRowWrapper>
          <InfoRowWrapper>
            <InfoWrapper color={mobileAppDashboard.textColor}>
              Уровень
            </InfoWrapper>
            <InfoWrapperData>
              {customerMarkParameters.loyaltyLevel.name}
            </InfoWrapperData>
          </InfoRowWrapper>
        </RowWrapper>
      </MainTextWrapper>
      <ButtonsWrapper>
        <ActionsButtonWrapper
          color={mobileAppDashboard.mainColor}
          src="src/assets/img/eye_white.png"
          onClick={() => handleButtonClick(card, ModalType.Details)}
        ></ActionsButtonWrapper>
        <ActionsButtonWrapper
          color={mobileAppDashboard.accentColor}
          src="src/assets/img/trash_white.png"
          onClick={() => handleButtonClick(card, ModalType.Delete)}
        ></ActionsButtonWrapper>
        <DetailsButtonWrapper
          color={mobileAppDashboard.textColor}
          background={mobileAppDashboard.cardBackgroundColor}
          onClick={() => handleButtonClick(card, ModalType.View)}
        >
          Подробнее
        </DetailsButtonWrapper>
      </ButtonsWrapper>
    </CardWrapper>
  );
}

export default Card;
