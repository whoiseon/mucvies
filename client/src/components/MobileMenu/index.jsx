import {useCallback, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import PageviewIcon from '@mui/icons-material/Pageview';
import MovieIcon from '@mui/icons-material/Movie';
import {Background, CloseBtn, MenuHeader, MenuWrapper} from "./styles";

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
              영화검색
            </Link>
          </li>
          <li>
            <Link to="/boxoffice">
              <MovieIcon />
              박스오피스
            </Link>
          </li>
        </ul>
      </MenuWrapper>
    </Background>
  );
};

export default MobileMenu;
