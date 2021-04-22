/**
 * work.js
 * Showcase of my work
 */

import Layout from '../components/layout';
import styled from 'styled-components';
import { mediaQueries } from '../styles/media-queries';

const WorkContainer = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.accentGreen};

  @media ${mediaQueries.lg} {
    height: calc(100vh - 5rem);
  }
`;

export default function Work() {
  const pageConfig = {
    title: 'work',
    description: 'The work of @robbatr0n.',
    primaryColour: '#10dfac',
  };

  return (
    <Layout pageConfig={pageConfig}>
      <WorkContainer>
        <h1>Work</h1>
      </WorkContainer>
    </Layout>
  );
}
