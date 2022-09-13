import {useCallback, useEffect, useState} from "react";
import {useParams, Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import {useMediaQuery} from "react-responsive";
import AppLayout from "../../components/AppLayout";
import {Content, ContentWrapper, Header, MovieInfo, MovieSummary, MovieTitle} from "./styles";
import {BoxOfficeMovieCard, SkeletonWrapper} from "../BoxOffice/styles";
import {CardWrapper, MovieImg} from "../../components/BoxOfficeCard/styles";

const Movie = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { summary } = location.state || '';
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });

  const onClickBackButton = () => {
    navigate(-1);
  };

  const fetchBoxOffice = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/api/movie', {
        params: {
          movieCode: params.code,
        },
      });
      setMovieData(data);
      setIsLoading(false);
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      console.log(message);
    }
  }, [params.code]);

  useEffect(() => {
    fetchBoxOffice();
  }, [params.code]);

  return (
    <AppLayout>
      <Header>
        <button type="button" onClick={onClickBackButton}>
          <ArrowBackIosIcon />
        </button>
        <p>
          영화정보
        </p>
      </Header>
      {
        isLoading
          ? (
            <SkeletonWrapper>
              <Stack spacing={1}>
                <ContentWrapper>
                  <Content>
                    <div>
                      <Skeleton variant="rounded" width="100%" height={isMobile ? 500 : 320} />
                    </div>
                    <div>
                      <MovieTitle>
                        <Skeleton variant="rounded" width={isMobile ? '50%' : 260} height={22} />
                        <Skeleton variant="rounded" width={isMobile ? '100%' : 520} height={18} />
                      </MovieTitle>
                      <MovieInfo>
                        <div>
                          <Skeleton variant="rounded" width={isMobile ? '50%' : 260} height={18} />
                        </div>
                        <div>
                          <Skeleton variant="rounded" width={isMobile ? '50%' : 260} height={18} />
                        </div>
                        <div>
                          <Skeleton variant="rounded" width={isMobile ? '50%' : 260} height={18} />
                        </div>
                        <div>
                          <Skeleton variant="rounded" width={isMobile ? '50%' : 260} height={18} />
                        </div>
                        <div>
                          <Skeleton variant="rounded" width={isMobile ? '50%' : 260} height={18} />
                        </div>
                      </MovieInfo>
                    </div>
                  </Content>
                  <MovieSummary>
                    <p>
                      <Skeleton variant="rounded" width="30%" height={18} />
                    </p>
                    <p>
                      <Skeleton variant="rounded" width="100%" height={18} />
                      <Skeleton variant="rounded" width="100%" height={18} />
                      <Skeleton variant="rounded" width="100%" height={18} />
                    </p>
                  </MovieSummary>
                </ContentWrapper>
              </Stack>
            </SkeletonWrapper>
          )
          : (
            <ContentWrapper>
              <Content>
                <div>
                  <img src={movieData.image} alt="movie_poster" />
                </div>
                <div>
                  <MovieTitle>
                    <p>{ movieData.title }</p>
                    <p>{ movieData.subTitle }</p>
                  </MovieTitle>
                  <MovieInfo>
                    <div>
                      <span>개봉일</span>
                      { movieData.release }
                    </div>
                    <div>
                      <span>장르</span>
                      { movieData.genre }
                    </div>
                    <div>
                      <span>국가</span>
                      { movieData.country }
                    </div>
                    <div>
                      <span>등급</span>
                      { movieData.rank }
                    </div>
                    <div>
                      <span>러닝타임</span>
                      { movieData.runningTime }
                    </div>
                    <div>
                      <span>러닝타임</span>
                      { movieData.rating }
                    </div>
                    <div>
                      <span>관객수</span>
                      { movieData.attendance || '0명' }
                    </div>
                  </MovieInfo>
                </div>
              </Content>
              <MovieSummary>
                <p>
                  줄거리
                </p>
                <p>
                  { summary || '' }
                </p>
              </MovieSummary>
            </ContentWrapper>
          )
      }
    </AppLayout>
  );
};

export default Movie;
