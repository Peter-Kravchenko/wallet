import { TCard } from '../../types/cards';
import { useStore } from '../../context/root-store-context';
import { ModalType } from '../../const';
import {
  CardWrapper,
  HeaderWrapper,
  NameWrapper,
  ImageWrapper,
  MainTextWrapper,
  RowWrapper,
  PointsWrapper,
  PointsText,
  InfoRowWrapper,
  InfoWrapper,
  InfoWrapperData,
  ButtonsWrapper,
  ActionsButtonWrapper,
  DetailsButtonWrapper,
} from '../styled-components/styled-components';

type TCardProps = {
  card: TCard;
};

function Card({ card }: TCardProps): JSX.Element {
  const { cardsDataStore, modalStore } = useStore();
  const { mobileAppDashboard, customerMarkParameters } = card;

  const handleButtonClick = (card, type) => {
    cardsDataStore.setCard(card);
    modalStore.openModal(type);
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
