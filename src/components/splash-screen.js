import { ST } from 'next/dist/next-server/lib/utils';
import styled from 'styled-components';

const StyledSplashScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 900;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
`;

const SplashScreen = () => {
  return (
    <StyledSplashScreen>
      <h1>Loading</h1>
    </StyledSplashScreen>
  );
};

export default SplashScreen;
