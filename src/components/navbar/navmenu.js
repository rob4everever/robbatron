/*
 * navmenu.js
 * Slideout navigation menu that appears on small devices.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

import { mediaQueries } from '../../styles/media-queries';
import Icon from '../../utils/icon-map';

const StyledMenu = styled.div`
  background: ${({ theme }) => theme.menuBackground};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  width: 100%;
  z-index: 20;
  color: ${({ theme }) => theme.menuText};

  @media ${mediaQueries.md} {
    background: transparent;
    align-items: center;
    display: flex;
    flex-direction: row;
    height: auto;
    justify-content: flex-end;
    position: relative;
    transform: none;
    color: ${({ theme }) => theme.primaryText};
    transition: none;
  }
`;

const NavLinksList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
  font-size: 2rem;

  @media ${mediaQueries.md} {
    flex-direction: row;
    font-size: 1rem;
  }
`;

const NavItem = styled.li`
  width: auto;
  padding: 0.3rem 0;
  border-bottom: solid transparent 4px;
  transition: all 0.2s ease-in-out;
  @media ${mediaQueries.md} {
    margin-left: 3rem;
  }
  @media ${mediaQueries.lg} {
    margin-left: 4rem;
  }
  &:hover {
    border-bottom: solid ${(props) => props.underlineColour} 4px;
  }
`;

const SocialMediaList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  height: auto;
  align-items: center;
  padding: 2rem 0;
  margin: 0;
  font-size: 1.2rem;
  @media ${mediaQueries.md} {
    display: none;
  }
`;

const NavMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavLinksList>
        <Link href="/about/">
          <a>
            <NavItem underlineColour="#10dfac">Work</NavItem>
          </a>
        </Link>
        <Link href="/">
          <a>
            <NavItem underlineColour="#ff5736">About</NavItem>
          </a>
        </Link>
        <Link href="/">
          <a>
            <NavItem underlineColour="#a17cff">Contact</NavItem>
          </a>
        </Link>
      </NavLinksList>
      <SocialMediaList>
        <Link href="/">
          <a>
            <Icon icon="github" />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Icon icon="instagram" />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Icon icon="linkedin" />
          </a>
        </Link>
      </SocialMediaList>
    </StyledMenu>
  );
};

NavMenu.propTypes = {
  open: PropTypes.bool,
};

export default NavMenu;
