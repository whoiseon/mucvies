import {useRecoilState, useRecoilValue} from "recoil";
import {movieState} from "../../states/movieState";
import AppLayout from "../../components/AppLayout";
import {InputWrapper, ResultMovieCard, SearchResult, SearchResultWrapper, SearchWrapper} from "./styles";
import SearchForm from "../../components/SearchForm";
import {searchKeywordState} from "../../states/searchKeywordState";
import MovieCard from "../../components/MovieCard";

const Search = () => {
  const [movies, setMovies] = useRecoilState(movieState);
  const searchKeyword = useRecoilValue(searchKeywordState);

  return (
    <AppLayout>
      <SearchWrapper>
        <SearchForm setMovies={setMovies} />
        <SearchResult>
          {
            searchKeyword === ''
              ? <p>영화를 검색해보세요</p>
              : (
                <SearchResultWrapper>
                  <p>
                    {`"${searchKeyword}"에 대한 검색 결과입니다.`}
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
