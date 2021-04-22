/*
 * logo.js
 * imports and renders the sites logo.
 */

import styled from 'styled-components';
import Image from 'next/image';
import { mediaQueries } from '../../styles/media-queries';

const LogoWrapper = styled.div`
  height: 3rem;
  width: 3rem;
  transition: transform 0.7s ease-in-out;

  &:hover {
    transform: rotate(180deg);
  }

  @media ${mediaQueries.md} {
    height: 4rem;
    width: 4rem;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Image src="/vercel.svg" alt="logo" width="720" height="720" />
    </LogoWrapper>
  );
};

export default Logo;
