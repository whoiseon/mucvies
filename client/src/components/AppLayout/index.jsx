import {Link, NavLink} from "react-router-dom";
import MovieIcon from '@mui/icons-material/Movie';
import PageviewIcon from '@mui/icons-material/Pageview';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuIcon from '@mui/icons-material/Menu';
import {useMediaQuery} from "react-responsive";
import {useCallback, useState} from "react";
import {
  Background,
  FooterWrapper,
  LeftMenu,
  MenuBottomLine,
  MenuBtn,
  MobileLogo,
  MobileTopBar,
  ResultArea,
} from "./styles";
import MobileMenu from "../MobileMenu";
import {BLUE_COLOR, BUTTON_HOVER, WHITE_COLOR} from "../../styles/common";

const AppLayout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });

  const onClickShowMobileMenu = useCallback(() => {
    setShowMobileMenu((prev) => !prev);
  }, []);

  const activeButton = {
    backgroundColor: `${BUTTON_HOVER}`,
    color: `${WHITE_COLOR}`,
  };

  return (
    <Background>
      {
        isMobile
          ? (
            <MobileTopBar>
              <MobileLogo>
                <Link to="/">
                  <h1>Mucvies</h1>
                </Link>
              </MobileLogo>
              <MenuBtn onClick={onClickShowMobileMenu}>
                <MenuIcon />
              </MenuBtn>
            </MobileTopBar>
          )
          : (
            <LeftMenu>
              <Link to="/">
                <h1>Mucvies</h1>
              </Link>
              <ul>
                <li>
                  <NavLink
                    to="/search"
                    style={({ isActive }) => (isActive ? activeButton : {})}
                  >
                    <PageviewIcon />
                    영화 검색
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ranking"
                    style={({ isActive }) => (isActive ? activeButton : {})}
                  >
                    <EmojiEventsIcon />
                    예매 순위
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/boxoffice/weekly"
                    style={({ isActive }) => (isActive ? activeButton : {})}
                  >
                    <MovieIcon />
                    박스오피스
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ott"
                    style={({ isActive }) => (isActive ? activeButton : {})}
                  >
                    <SmartDisplayIcon />
                    OTT
                  </NavLink>
                </li>
              </ul>
              <FooterWrapper>
                <p>All rights reserved. <br /> HWANG IN SEON </p>
                <p>본 사이트는 포트폴리오용<br /> 목적으로 어떠한 상업적인<br /> 용도로도 사용되지 않습니다.</p>
              </FooterWrapper>
            </LeftMenu>
          )
      }
      <ResultArea>
        {children}
      </ResultArea>
      { showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} /> }
    </Background>
  );
};

export default AppLayout;
