import {useCallback, useEffect, useState} from "react";
import {useParams, Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
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
          ? '로딩중'
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
                      개봉일
                      <span>{ movieData.release }</span>
                    </div>
                    <div>
                      장르
                      <span>{ movieData.genre }</span>
                    </div>
                    <div>
                      국가
                      <span>{ movieData.country }</span>
                    </div>
                    <div>
                      등급
                      <span>{ movieData.rank }</span>
                    </div>
                    <div>
                      러닝타임
                      <span>{ movieData.runningTime }</span>
                    </div>
                    <div>
                      평점
                      <span>{ movieData.rating }</span>
                    </div>
                    <div>
                      관객수
                      <span>{ movieData.attendance || '0명' }</span>
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
