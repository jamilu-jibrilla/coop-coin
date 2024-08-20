import { NavLink } from "react-router-dom";
import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";

type StatusProps = {
  isOpen: boolean;
};

export const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
`;

export const SideNav = styled("nav").withConfig({
  shouldForwardProp,
})<StatusProps>`
  width: 250px;
  border-right: 0.5px solid rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: auto 1fr;
  transition: transform 0.3s ease-in-out;
  background-color: #E7EFEA;

  @media (max-width: 980px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1000;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
  }
`;

export const SideNavHeader = styled.div`
  height: 76px;
  padding: 12px 24px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

export const SideNavContent = styled.div`
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const MainContent = styled.main`
  display: grid;
  background: #f6f6f6;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`;

export const TopNav = styled.header`
  display: flex;
  background: white;
  border-top: 0.5px rgba(0, 0, 0, 0.20);
  border-bottom: 0.5px rgba(0, 0, 0, 0.20);
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  height: 76px;
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 980px) {
    display: block;
  }
`;

export const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;

  @media (max-width: 980px) {
    display: block;
  }
`;
export const MainMenuItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const PageTitle = styled.span`
  display: inline-block;
  color: #0c5c31;
  font-size: 20px;
  font-weight: 500;
`;

export const Overlay = styled("div").withConfig({
  shouldForwardProp,
})<StatusProps>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (max-width: 980px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

export const MenuItemWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 5px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: rgba(12, 92, 49, 0.1);
  }

  &.active {
    background: #0c5c31;
    color: white;

    &:hover {
      background-color: #0c5c31;
    }
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const MenuText = styled.span`
  flex-grow: 1;
  margin-top: 4px;
`;

export const ScrollableContentSection = styled.div`
  overflow-y: auto;
  padding: 20px;
`;