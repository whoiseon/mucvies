import {useRecoilState, useRecoilValue} from "recoil";
import {movieState} from "../../states/movieState";
import AppLayout from "../../components/AppLayout";
import {InputWrapper, SearchResult, SearchResultWrapper, SearchWrapper} from "./styles";
import SearchForm from "../../components/SearchForm";
import {searchKeywordState} from "../../states/searchKeywordState";

const Search = () => {
  const [movies, setMovies] = useRecoilState(movieState);
  const searchKeyword = useRecoilValue(searchKeywordState);

  console.log(movies);

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
                    {`"${searchKeyword}"의 검색 결과입니다.`}
                  </p>
                  {
                    movies?.map((item, idx) => {
                      return (
                        <div key={item.title}>
                          <img src={item.image} alt="movie_img" />
                        </div>
                      );
                    })
                  }
                </SearchResultWrapper>
              )
          }
        </SearchResult>
      </SearchWrapper>
    </AppLayout>
  );
};

export default Search;
