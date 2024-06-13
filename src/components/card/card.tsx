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
  ActionButton,
  DetailsButton,
} from '../styled-components/styled-components';

type CardProps = {
  card: TCard;
};

function Card({ card }: CardProps): JSX.Element {
  const { dataStore, modalStore } = useStore();
  const { mobileAppDashboard, customerMarkParameters } = card;

  const handleButtonClick = (card: TCard, type: ModalType) => {
    dataStore.setCard(card);
    modalStore.openModal(type);
  };

  return (
    <CardWrapper $backgroundColor={mobileAppDashboard.cardBackgroundColor}>
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
        <ActionButton
          color={mobileAppDashboard.mainColor}
          src="src/assets/img/eye_white.png"
          onClick={() => handleButtonClick(card, ModalType.Details)}
        />
        <ActionButton
          color={mobileAppDashboard.accentColor}
          src="src/assets/img/trash_white.png"
          onClick={() => handleButtonClick(card, ModalType.Delete)}
        />
        <DetailsButton
          color={mobileAppDashboard.textColor}
          $backgroundColor={mobileAppDashboard.backgroundColor}
          onClick={() => handleButtonClick(card, ModalType.View)}
        >
          Подробнее
        </DetailsButton>
      </ButtonsWrapper>
    </CardWrapper>
  );
}

export default Card;
