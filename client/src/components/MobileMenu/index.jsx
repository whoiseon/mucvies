import {useCallback, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import PageviewIcon from '@mui/icons-material/Pageview';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MovieIcon from '@mui/icons-material/Movie';
import {Background, CloseBtn, MenuHeader, MenuWrapper} from "./styles";
import {FooterWrapper} from "../AppLayout/styles";

const MobileMenu = ({ setShowMobileMenu }) => {
  const onClickCloseMenuArea = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setShowMobileMenu(false);
    }
  }, []);

  const onClickCloseMenu = useCallback(() => {
    setShowMobileMenu(false);
  }, []);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
    `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <Background onClick={onClickCloseMenuArea}>
      <MenuWrapper>
        <MenuHeader>
          <CloseBtn onClick={onClickCloseMenu}>
            <CloseIcon />
          </CloseBtn>
        </MenuHeader>
        <ul>
          <li>
            <Link to="/">
              <HomeIcon />
              홈
            </Link>
          </li>
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
      </MenuWrapper>
    </Background>
  );
};

export default MobileMenu;
