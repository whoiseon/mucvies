import {Link} from "react-router-dom";
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

const AppLayout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });

  const onClickShowMobileMenu = useCallback(() => {
    setShowMobileMenu((prev) => !prev);
  }, []);

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
                  <Link to="/search">
                    <PageviewIcon />
                    영화 검색
                  </Link>
                </li>
                <li>
                  <Link to="/ranking">
                    <EmojiEventsIcon />
                    예매 순위
                  </Link>
                </li>
                <li>
                  <Link to="/boxoffice/weekly">
                    <MovieIcon />
                    박스오피스
                  </Link>
                </li>
                <li>
                  <Link to="/ott">
                    <SmartDisplayIcon />
                    OTT
                  </Link>
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
