import {memo, useState, useCallback} from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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

  const onSubmitSearch = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onChangeValue = useCallback(async (e) => {
    setValue(e.target.value);
    try {
      const { data } = await axios.get('/api/search', {
        params: {
          query: e.target.value,
          genre,
          country,
        },
      });
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  }, [value]);

  return (
    <SearchFormWrapper onSubmit={onSubmitSearch}>
      <Header>
        영화 검색
      </Header>
      <InputWrapper>
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
