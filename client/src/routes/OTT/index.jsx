import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {useRecoilState} from "recoil";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import AppLayout from "../../components/AppLayout";
import {ottState} from "../../states/ottState";
import {Header, OttMovieCard, OttSection} from "./styles";
import OttCard from "../../components/OttCard";
import {SkeletonWrapper} from "../BoxOffice/styles";
import {CardWrapper, MovieImg, MovieInfo} from "../../components/BoxOfficeCard/styles";
import waveLogo from "../../asset/wave_logo.svg";
import tvingLogo from "../../asset/tving_logo.svg";
import watchaLogo from "../../asset/watcha_logo.svg";

const OTT = () => {
  const [ott, setOtt] = useRecoilState(ottState);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRanking = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/api/ott');
      setOtt(data);
      setIsLoading(false);
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      console.log(message);
    }
  }, []);

  useEffect(() => {
    fetchRanking();
  }, []);

  const fakeArrayToSkeleton = Array.from({ length: 10 }, (v, i) => i);

  return (
    <AppLayout>
      {
        isLoading
          ? (
            <SkeletonWrapper>
              <Stack spacing={1}>
                <OttMovieCard>
                  {
                    fakeArrayToSkeleton.map((v, i) => {
                      return (
                        <CardWrapper key={v}>
                          <MovieImg>
                            <Skeleton variant="rounded" width="100%" height={300} />
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
                </OttMovieCard>
              </Stack>
            </SkeletonWrapper>
          )
          : (
            ott.map((data, i) => {
              return (
                <OttSection key={data.movie[i].title}>
                  <Header>
                    {
                      data.title.includes('웨이브')
                        ? <img src={waveLogo} alt="wave_logo" />
                        : data.title.includes('왓챠')
                          ? <img src={watchaLogo} alt="watcha_logo" />
                          : data.title.includes('티빙')
                            ? <img src={tvingLogo} alt="tving_logo" />
                            : null
                    }
                    { data.title }
                  </Header>
                  <OttMovieCard>
                    {
                      data.movie.map((movie, idx) => {
                        return (
                          <OttCard key={movie.title} data={movie} />
                        );
                      })
                    }
                  </OttMovieCard>
                </OttSection>
              );
            })
          )
      }
    </AppLayout>
  );
};

export default OTT;
