import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { IconType } from "react-icons";
import AppLogo from "/assets/cbn-coop-logo.png";
import { Col, Row } from "antd";
import { HamburgerMenu, NotificationBell } from "./Icons";
import { PrimaryButton } from "../src/components";
import {
  BottomMenuItems,
  CloseButton,
  HamburgerButton,
  IconWrapper,
  Layout,
  MainContent,
  MainMenuItems,
  MenuItemWrapper,
  MenuText,
  Overlay,
  PageTitle,
  ScrollableContentSection,
  SideNav,
  SideNavContent,
  SideNavHeader,
  TopNav,
} from "./styles";
import { bottomMenuItems, mainMenuItems } from "./Menu";

interface MenuItemProps {
  icon: IconType;
  text: string;
  to: string;
}

const AppLayout: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const getPageTitle = (pathname: string) => {
    const route = [...mainMenuItems, ...bottomMenuItems].find(
      (item) => item.to === pathname
    );
    return route ? route.name : "Overview";
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 980) {
      setIsNavOpen(true);
    } else {
      setIsNavOpen(false);
    }
  }, [windowWidth]);

  return (
    <Layout>
      <SideNav isOpen={isNavOpen}>
        <SideNavHeader>
          <div>
            <img src={AppLogo} alt="app_logo" width="150px" />
          </div>
        </SideNavHeader>
        <SideNavContent>
          {windowWidth <= 980 && (
            <CloseButton onClick={toggleNav}>&times;</CloseButton>
          )}
          <MainMenuItems>
            {mainMenuItems.map((item) => (
              <MenuItem
                key={item.name}
                icon={item.icon}
                text={item.name}
                to={item.to}
              />
            ))}
          </MainMenuItems>
          <BottomMenuItems>
            {bottomMenuItems.map((item) => (
              <MenuItem
                key={item.name}
                icon={item.icon}
                text={item.name}
                to={item.to}
              />
            ))}
          </BottomMenuItems>
        </SideNavContent>
      </SideNav>
      <MainContent>
        <TopNav>
          <HamburgerButton onClick={toggleNav}>
            <HamburgerMenu />
          </HamburgerButton>
          <PageTitle>{getPageTitle(location.pathname)}</PageTitle>
          <PrimaryButton
            width="32px"
            icon={<NotificationBell />}
          ></PrimaryButton>
        </TopNav>

        <ScrollableContentSection>
          <Row justify="center" align="middle">
            <Col md={24} xs={24}>
              <Outlet />
            </Col>
          </Row>
        </ScrollableContentSection>
      </MainContent>
      <Overlay isOpen={isNavOpen && windowWidth <= 980} onClick={toggleNav} />
    </Layout>
  );
};

export default AppLayout;

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, text, to }) => {
  return (
    <MenuItemWrapper to={to}>
      <IconWrapper>
        <Icon size={16} />
      </IconWrapper>
      <MenuText>{text}</MenuText>
    </MenuItemWrapper>
  );
};