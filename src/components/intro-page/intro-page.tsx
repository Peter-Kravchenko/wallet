import styled from 'styled-components';

const IntroPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LogoWrapper = styled.img`
  width: 50vw;
  height: 50vw;
`;

const LOGO_URL = '../public/img/logo.png';

function IntroPage() {
  return (
    <IntroPageWrapper>
      <LogoWrapper
        className="splashScreen__logo"
        src={LOGO_URL}
        alt="Mobint logo"
      />
    </IntroPageWrapper>
  );
}

export default IntroPage;
