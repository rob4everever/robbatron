/*
 * burger.js
 * Builds an animated burger logo for the navbar.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/media-queries';

const StyledBurger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  overflow: hidden;
  padding: 0;
  position: relative;
  z-index: 30;

  @media ${mediaQueries.md} {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    background: ${({ theme, open }) => (open ? theme.pageBackground : theme.menuBackground)};
    border-radius: 10px;
    height: 0.1rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default Burger;
