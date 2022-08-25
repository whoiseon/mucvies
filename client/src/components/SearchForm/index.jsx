import {memo, useState, useCallback, useEffect} from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import {useRecoilState, useRecoilValue} from "recoil";
import {Header, InputWrapper, SearchFormWrapper, SearchOptionWrapper} from "../../routes/Search/styles";
import {searchKeywordState} from "../../states/searchKeywordState";
import OptionButton from "../OptionButton";
import {genreListState, countryListState, genreState, countryState} from "../../states/optionListState";

const SearchForm = ({ setMovies }) => {
  const genreList = useRecoilValue(genreListState);
  const countryList = useRecoilValue(countryListState);

  const [value, setValue] = useRecoilState(searchKeywordState);
  const [genre, setGenre] = useRecoilState(genreState);
  const [country, setCountry] = useRecoilState(countryState);

  const [focus, setFocus] = useState(false);

  const onSubmitSearch = useCallback(async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get('/api/search', {
        params: {
          query: value,
          genre,
          country,
        },
      });
      setMovies(data);
    } catch (error) {
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
      </InputWrapper>
      <SearchOptionWrapper>
        <OptionButton title="장르" data={genreList} setState={setGenre} />
        <OptionButton title="국가" data={countryList} setState={setCountry} />
      </SearchOptionWrapper>
    </SearchFormWrapper>
  );
};

export default memo(SearchForm);
