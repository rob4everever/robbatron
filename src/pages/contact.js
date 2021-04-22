/**
 * contact.js
 * Showcase of my work
 */

import Layout from '../components/layout';
import styled from 'styled-components';
import { mediaQueries } from '../styles/media-queries';

const ContactContainer = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.accentRed};

  @media ${mediaQueries.lg} {
    height: calc(100vh - 5rem);
  }
`;

export default function Contact() {
  const pageConfig = {
    title: 'contact',
    description: 'Get in touch with @robbatr0n.',
    primaryColour: '#ff5736',
  };

  return (
    <Layout pageConfig={pageConfig}>
      <ContactContainer>
        <h1>Contact</h1>
      </ContactContainer>
    </Layout>
  );
}
