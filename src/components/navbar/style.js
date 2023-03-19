import styled from "styled-components";


export const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px 0;

  @media (max-width: 600px) {
    width: unset;
    margin: 0 10px;
  }
`;


export const Nav = styled.nav`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;


export const Title = styled.h2`
  user-select: none;

  & span {
    color: var(--principal-color);
  }
`;


export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavItem = styled.li`
  list-style: none;
  margin: 0 12px; 
  padding: 5px 0;
  font-size: 18px;
  position: relative;
  cursor: pointer;
  transition: color .3s;

  &.active {
    color: var(--color-white);
  }
  &.active::before {
    content: '';
    display: block;
    width: 70%;
    height: 2px;
    background: var(--color-white);
    color: var(--color-white);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    color: var(--color-white);
  }
`;


export const Button = styled.button`
  border: none;
  cursor: pointer;
  background: unset;
  padding: 0 5px;
  display: none;
  align-items: center;

  & span, & span::before, & span::after {
    content: '';
    display: block;
    background: var(--color-white);
    width: 28px;
    height: 2px;
    position: relative;
    left: 0;
    transition: transform .3s;
  }
  & span::before {
    position: absolute;
    top: -8px;
  }
  & span::after {
    position: absolute;
    top: 8px;
  }
  &:hover span::before { transform: translateY(-3px) }
  &:hover span::after { transform: translateY(3px) }
`;
