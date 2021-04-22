/*
 * navbar.js
 * Navigation bar component that contains a logo and either nav links
 * or a burger menu depending on the screen size.
 */

import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { mediaQueries } from '../../styles/media-queries';
import { useOnClickOutside } from '../../hooks';
import Logo from './logo';
import Burger from './burger';
import NavMenu from './navmenu';

const Nav = styled.nav`
  align-items: center;
  background: ${(props) => props.primaryColour};
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  width: 100%;
  @media ${mediaQueries.md} {
    padding: 1rem 2rem;
  }
  @media ${mediaQueries.lg} {
    height: 5rem;
    padding: 1rem 4rem;
  }
`;

const Navbar = ({ primaryColour }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Nav ref={node} primaryColour={primaryColour}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Burger open={open} setOpen={setOpen} />
      <NavMenu open={open} />
    </Nav>
  );
};

Navbar.propTypes = {
  primaryColour: PropTypes.string,
};

Navbar.defaultProps = {
  primaryColour: '#ffffff',
};

export default Navbar;
