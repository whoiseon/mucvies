import {Link} from "react-router-dom";
import MovieIcon from '@mui/icons-material/Movie';
import PageviewIcon from '@mui/icons-material/Pageview';
import MenuIcon from '@mui/icons-material/Menu';
import {useMediaQuery} from "react-responsive";
import {Background, LeftMenu, MenuBottomLine, MenuBtn, MobileLogo, MobileTopBar, ResultArea} from "./styles";

const AppLayout = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });

  return (
    <Background>
      {
        isMobile
          ? (
            <MobileTopBar>
              <MobileLogo>
                <h1>Mucvies</h1>
              </MobileLogo>
              <MenuBtn>
                <MenuIcon />
              </MenuBtn>
              <MenuBottomLine />
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
                  <Link to="/boxoffice">
                    <MovieIcon />
                    박스오피스
                  </Link>
                </li>
              </ul>
            </LeftMenu>
          )
      }
      <ResultArea>
        {children}
      </ResultArea>
    </Background>
  );
};

export default AppLayout;
