import styled from 'styled-components';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
`;

const HeaderText = styled.p`
  font-size: 10vw;
  color: #2688eb;
  text-align: center;
  font-family: 'SegoeUIRegular';
  white-space: nowrap;
  margin: 4vw;
`;

function HeaderComponent(): JSX.Element {
  return (
    <StyledHeader>
      <HeaderText>Карты</HeaderText>
    </StyledHeader>
  );
}

export default HeaderComponent;
