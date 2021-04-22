import Layout from '../components/layout';
import styled from 'styled-components';
import { mediaQueries } from '../styles/media-queries';

const AboutContainer = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.accentRed};

  @media ${mediaQueries.lg} {
    height: calc(100vh - 5rem);
  }
`;

export default function About() {
  const pageConfig = {
    title: 'about',
    description: 'All about @robbatr0n.',
    primaryColour: '#ff5736',
  };

  return (
    <Layout pageConfig={pageConfig}>
      <AboutContainer>
        <h1>About</h1>
      </AboutContainer>
    </Layout>
  );
}
