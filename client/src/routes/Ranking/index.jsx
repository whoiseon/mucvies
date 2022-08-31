import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {useRecoilState} from "recoil";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import AppLayout from "../../components/AppLayout";
import {BoxOfficeMovieCard, Header, SkeletonWrapper} from "../BoxOffice/styles";
import {RankingMovieCard, RankingWrapper} from "./styles";
import {rankingState} from "../../states/rankingState";
import RankingCard from "../../components/RankingCard";
import {CardWrapper, MovieImg, MovieInfo} from "../../components/BoxOfficeCard/styles";

const Ranking = () => {
  const [ranking, setRanking] = useRecoilState(rankingState);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRanking = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/api/ranking');
      setRanking(data);
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

  const fakeArrayToSkeleton = Array.from({ length: 20 }, (v, i) => i);

  return (
    <AppLayout>
      <Header>
        <span>
          예매 순위
        </span>
      </Header>
      <RankingWrapper>
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
                  </BoxOfficeMovieCard>
                </Stack>
              </SkeletonWrapper>
            )
            : (
              <RankingMovieCard>
                {
                  ranking?.map((data, i) => {
                    return (
                      <RankingCard key={data.title} data={data} />
                    );
                  })
                }
              </RankingMovieCard>
            )
        }
      </RankingWrapper>
    </AppLayout>
  );
};

export default Ranking;
