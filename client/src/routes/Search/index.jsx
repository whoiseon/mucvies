import {useRecoilState, useRecoilValue} from "recoil";
import {useState} from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import {movieState} from "../../states/movieState";
import AppLayout from "../../components/AppLayout";
import {
  InputWrapper,
  ResultMovieCard,
  SearchResult,
  SearchResultWrapper,
  SearchWrapper,
  SkeletonWrapper,
} from "./styles";
import SearchForm from "../../components/SearchForm";
import {searchKeywordState} from "../../states/searchKeywordState";
import MovieCard from "../../components/MovieCard";
import {CardWrapper, MovieImg, MovieInfo} from "../../components/MovieCard/styles";

const Search = () => {
  const [movies, setMovies] = useRecoilState(movieState);
  const searchKeyword = useRecoilValue(searchKeywordState);

  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fakeArrayToSkeleton = Array.from({ length: 15 }, (v, i) => i);

  return (
    <AppLayout>
      <SearchWrapper>
        <SearchForm
          setMovies={setMovies}
          setKeyword={setKeyword}
          setIsLoading={setIsLoading}
        />
        <SearchResult>
          {
            movies.length === 0
              ? <p>영화를 검색해보세요</p>
              : isLoading
                ? (
                  <SearchResultWrapper>
                    <SkeletonWrapper>
                      <Stack spacing={1}>
                        <p>
                          <Skeleton variant="rounded" width={300} height={24} />
                        </p>
                        <ResultMovieCard style={{ marginTop: '0' }}>
                          {
                            fakeArrayToSkeleton.map((v, i) => {
                              return (
                                <CardWrapper key={v}>
                                  <MovieImg>
                                    <Skeleton variant="rounded" width="100%" height={260} />
                                  </MovieImg>
                                  <MovieInfo>
                                    <p>
                                      <Skeleton variant="rounded" width={100} height={14} />
                                    </p>
                                    <p>
                                      <Skeleton variant="rounded" width="100%" height={16} />
                                    </p>
                                  </MovieInfo>
                                </CardWrapper>
                              );
                            })
                          }
                        </ResultMovieCard>
                      </Stack>
                    </SkeletonWrapper>
                  </SearchResultWrapper>
                )
                : (
                  <SearchResultWrapper>
                    <p>
                      {`"${keyword}"에 대한 검색 결과입니다.`}
                    </p>
                    <ResultMovieCard>
                      {
                        movies?.map((item, idx) => {
                          return (
                            <MovieCard key={item.title} item={item} />
                          );
                        })
                      }
                    </ResultMovieCard>
                  </SearchResultWrapper>
                )
          }
        </SearchResult>
      </SearchWrapper>
    </AppLayout>
  );
};

export default Search;
