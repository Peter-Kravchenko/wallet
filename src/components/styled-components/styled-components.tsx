import styled from 'styled-components';

type CardWrapperProps = {
  $backgroundColor?: string;
};

type NameWrapperProps = {
  color?: string;
};

type ImageWrapperProps = {
  src: string;
};

type PointsWrapperProps = {
  color?: string;
};

type PointsTextProps = {
  color?: string;
};

type InfoWrapperProps = {
  color?: string;
};

type ActionsButtonProps = {
  color?: string;
};

type DetailsButtonProps = {
  $backgroundColor?: string;
  color?: string;
};

export const CardWrapper = styled.div<CardWrapperProps>`
  display: flex;
  flex-direction: column;
  margin: 4vw;
  font-family: 'SegoeUIRegular';
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#fff'};
  border-radius: 30px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  margin: 4vw;
`;

export const NameWrapper = styled.p<NameWrapperProps>`
  font-size: 10vw;
  color: ${({ color }) => color || 'black'};
`;

export const ImageWrapper = styled.img<ImageWrapperProps>`
  margin: 4vw 4vw 2vw 0;
  max-width: 15vw;
  border-radius: 50%;
`;

export const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4vw;
  border-bottom: 1px solid #efefef;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PointsWrapper = styled.p<PointsWrapperProps>`
  font-size: 6vw;
  margin-right: 2vw;
  color: ${({ color }) => color || 'black'};
`;

export const PointsText = styled.p<PointsTextProps>`
  font-size: 4vw;
  color: ${({ color }) => color || 'black'};
`;

export const InfoWrapper = styled.p<InfoWrapperProps>`
  font-size: 2vw;
  margin-top: 4vw;
  margin-bottom: 2vw;
  color: ${({ color }) => color || 'black'};
`;

export const InfoWrapperData = styled.p`
  font-size: 4vw;
  margin-bottom: 2vw;
`;

export const InfoRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20vw;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vw 4vw 4vw 0;
`;

export const ActionButton = styled.img<ActionsButtonProps>`
  margin-right: 20vw;
  width: 8vw;
  height: 8vw;
  background-color: ${({ color }) => color || '#black'};
  border-radius: 50%;
`;

export const DetailsButton = styled.button<DetailsButtonProps>`
  font-size: 4vw;
  color: ${({ color }) => color || 'black'};
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#efefef'};
  border: none;
  border-radius: 15px;
  padding: 3vw;
`;
