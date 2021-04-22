/**
 * index.js
 * Website homepage
 */

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SplashScreen from '../components/splash-screen';
import { ContentContainer } from '../styles/containers';
import { mediaQueries } from '../styles/media-queries';

const HomePageContainer = styled(ContentContainer)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  @media ${mediaQueries.md} {
    display: grid;
    grid-template-columns: 65% 35%;
    grid-template-rows: 70% 30%;
  }
`;

const Name = styled.div`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 2px;
  font-size: 3rem;
  padding-top: 2rem;
  margin-bottom: 1rem;
  line-height: 1;
  display: flex;
  justify-content: end;
  flex-direction: column;

  @media ${mediaQueries.sm} {
    font-size: 4.5rem;
  }

  @media ${mediaQueries.md} {
    font-size: 5rem;
  }
  @media ${mediaQueries.lg} {
    font-size: 7rem;
  }
  @media ${mediaQueries.xl} {
    font-size: 9rem;
  }

  h1 {
    margin: 0;
  }
`;

const Subtitle1 = styled.div`
  font-size: 2rem;
  align-items: end;
  display: flex;

  @media ${mediaQueries.md} {
    font-size: 1.8rem;
    justify-content: end;
  }

  @media ${mediaQueries.xl} {
    justify-content: start;
    font-size: 2.5rem;
  }

  h3 {
    margin: 0;
  }
  .comma {
    display: none;
    @media ${mediaQueries.md} {
      display: inline;
    }
  }
`;

const Subtitle2 = styled.div`
  font-size: 2rem;
  width: auto;

  @media ${mediaQueries.md} {
    display: inline-block;
    text-align: center;
    font-size: 2rem;
    margin: 2rem auto 0 0;
  }

  h3 {
    margin: 0;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.yPos};
  left: ${(props) => props.xPos};
  border-radius: 50%;
  background: ${(props) => props.bgColour};
  z-index: -1;
`;

export default function Home() {
  const delay = 5;
  const [isLoading, setStopLoad] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setStopLoad(false), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  });

  return (
    <Layout pageConfig={pageConfig}>
      <HomePageContainer>
        <Name>
          <h1>rob</h1>
          <h1>barton</h1>
          <Circle height="400px" width="400px" xPos="30%" yPos="20%" bgColour={'#ff5736'} />
        </Name>
        <Subtitle1>
          <h3>
            <span className="comma">,</span> a freelance
          </h3>
          <Circle height="200px" width="200px" xPos="70%" yPos="60%" bgColour={'#a17cff'} />
        </Subtitle1>
        <Subtitle2>
          <h3>designer and</h3>
          <h3>developer from the UK.</h3>
          <Circle height="300px" width="300px" xPos="5%" yPos="70%" bgColour={'#10dfac'} />
        </Subtitle2>
      </HomePageContainer>
    </Layout>
  );
}

//passed to the metadata component to set some properties
const pageConfig = {
  title: 'home',
  description: 'Portfolio website built by @robbatr0n',
  primaryColour: '#ffffff',
};
