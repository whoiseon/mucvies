import {memo, useState, useCallback, useEffect} from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import {useRecoilState, useRecoilValue} from "recoil";
import {useQuery} from "react-query";
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
        ?????? ??????
      </Header>
      <InputWrapper focus={focus}>
        <input
          type="text"
          onChange={onChangeValue}
          placeholder="?????????"
        />
        <SearchIcon />
        { errorBubble && <ErrorBubble content="?????? ???????????? ??????????????????" /> }
      </InputWrapper>
      <SearchOptionWrapper>
        <OptionButton title="??????" data={genreList} setState={setGenre} />
        <OptionButton title="??????" data={countryList} setState={setCountry} />
      </SearchOptionWrapper>
      <SearchButtonWrapper>
        <button type="submit">
          ??????
        </button>
      </SearchButtonWrapper>
    </SearchFormWrapper>
  );
};

export default memo(SearchForm);
