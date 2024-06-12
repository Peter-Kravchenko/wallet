import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
`;

const HeaderTextWrapper = styled.p`
  font-size: 10vw;
  color: #2688eb;
  text-align: center;
  font-family: 'SegoeUIRegular';
  white-space: nowrap;
  margin: 4vw;
`;

function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <HeaderTextWrapper>Управление картами</HeaderTextWrapper>
    </HeaderWrapper>
  );
}

export default Header;
