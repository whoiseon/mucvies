import {useRecoilState} from "recoil";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Link, NavLink, useParams} from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import AppLayout from "../../components/AppLayout";
import {BoxOfficeMovieCard, BoxOfficeWrapper, Header, SkeletonWrapper} from "./styles";
import {boxofficeState} from "../../states/boxofficeState";
import BoxOfficeCard from "../../components/BoxOfficeCard";
import {CardWrapper, MovieImg, MovieInfo} from "../../components/BoxOfficeCard/styles";
import {BLUE_COLOR, WHITE_COLOR} from "../../styles/common";

const BoxOffice = () => {
  const [boxoffice, setBoxoffice] = useRecoilState(boxofficeState);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const fetchBoxOffice = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/api/boxoffice', {
        params: {
          period: params.period,
        },
      });
      setBoxoffice(data);
      setIsLoading(false);
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      console.log(message);
    }
  }, [params.period]);

  useEffect(() => {
    fetchBoxOffice();
  }, [params.period]);

  const fakeArrayToSkeleton = Array.from({ length: 15 }, (v, i) => i);

  const activeButton = {
    backgroundColor: `${BLUE_COLOR}`,
    color: `${WHITE_COLOR}`,
  };

  return (
    <AppLayout>
      <Header>
        <span>
          박스오피스
        </span>
        <div>
          <NavLink
            to="/boxoffice/weekly"
            style={({ isActive }) => (isActive ? activeButton : {})}
          >
            <span>주간</span>
          </NavLink>
          <NavLink
            to="/boxoffice/monthly"
            style={({ isActive }) => (isActive ? activeButton : {})}
          >
            <span>월간</span>
          </NavLink>
          <NavLink
            to="/boxoffice/yearly"
            style={({ isActive }) => (isActive ? activeButton : {})}
          >
            <span>년간</span>
          </NavLink>
        </div>
      </Header>
      <BoxOfficeWrapper>
        {
          isLoading
            ? (
              <SkeletonWrapper>
                <Stack spacing={1}>
                  <BoxOfficeMovieCard>
                    {
                    fakeArrayToSkeleton.map((v, i) => {
                      return (
                        <CardWrapper key={v}>
                          <MovieImg>
                            <Skeleton variant="rounded" width="100%" height={340} />
                          </MovieImg>
                          <MovieInfo>
                            <p>
                              <Skeleton variant="rounded" width={100} height={14} />
                            </p>
                            <p>
                              <Skeleton variant="rounded" width="100%" height={14} />
                            </p>
                          </MovieInfo>
                        </CardWrapper>
                      );
                    })
                  }
                  </BoxOfficeMovieCard>
                </Stack>
              </SkeletonWrapper>
            )
            : (
              <BoxOfficeMovieCard>
                {
                  boxoffice?.map((data, i) => {
                    return (
                      <BoxOfficeCard key={data.title} data={data} />
                    );
                  })
                }
              </BoxOfficeMovieCard>
            )
        }
      </BoxOfficeWrapper>
    </AppLayout>
  );
};

export default BoxOffice;
