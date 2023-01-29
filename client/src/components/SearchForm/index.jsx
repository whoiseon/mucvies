import {memo, useState, useCallback, useEffect} from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import {useRecoilState, useRecoilValue} from "recoil";
import {
  Header,
  InputWrapper,
  SearchButtonWrapper,
  SearchFormWrapper,
  SearchOptionWrapper,
} from "../../routes/Search/styles";
import {searchKeywordState} from "../../states/searchKeywordState";
import OptionButton from "../OptionButton";
import {genreListState, countryListState, genreState, countryState} from "../../states/optionListState";
import ErrorBubble from "../ErrorBubble";

const SearchForm = ({ setMovies, setKeyword, setIsLoading, setDefaultView }) => {
  const genreList = useRecoilValue(genreListState);
  const countryList = useRecoilValue(countryListState);

  const [value, setValue] = useRecoilState(searchKeywordState);
  const [genre, setGenre] = useRecoilState(genreState);
  const [country, setCountry] = useRecoilState(countryState);

  const [errorBubble, setErrorBubble] = useState(false);

  const [focus, setFocus] = useState(false);

  const getSearchResult = useCallback(async () => {
    const { data } = await axios.get('/api/search', {
      params: {
        query: value,
        genre,
        country,
      },
    });

    return data;
  }, [value, genre, country]);

  const onSubmitSearch = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (value === '') {
        setMovies([]);
        setValue('');
        setIsLoading(false);
        setErrorBubble(true);
        setTimeout(() => {
          setErrorBubble(false);
        }, 3000);
      } else {
        const { data } = await axios.get('/api/search', {
          params: {
            query: value,
            genre,
            country,
          },
        });
        setDefaultView(false);
        setIsLoading(false);
        setKeyword(value);
        setMovies(data);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }, [value, genre, country]);

  const onChangeValue = useCallback(async (e) => {
    setFocus(true);
    setValue(e.target.value);
  }, []);

  return (
    <SearchFormWrapper onSubmit={onSubmitSearch}>
      <Header>
        영화 검색
      </Header>
      <InputWrapper focus={focus}>
        <input
          type="text"
          onChange={onChangeValue}
          placeholder="키워드"
        />
        <SearchIcon />
        { errorBubble && <ErrorBubble content="검색 키워드를 입력해주세요" /> }
      </InputWrapper>
      <SearchOptionWrapper>
        <OptionButton title="장르" data={genreList} setState={setGenre} />
        <OptionButton title="국가" data={countryList} setState={setCountry} />
      </SearchOptionWrapper>
      <SearchButtonWrapper>
        <button type="submit">
          검색
        </button>
      </SearchButtonWrapper>
    </SearchFormWrapper>
  );
};

export default memo(SearchForm);
