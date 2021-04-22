import styled from 'styled-components';
import { mediaQueries } from './media-queries';

export const ContentContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  @media ${mediaQueries.md} {
    padding: 0 2rem;
  }
  @media ${mediaQueries.lg} {
    padding: 0 4rem;
  }
`;
