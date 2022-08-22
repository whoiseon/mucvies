import {memo, useState, useCallback} from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import {useRecoilState, useRecoilValue} from "recoil";
import {InputWrapper, SearchFormWrapper} from "../../routes/Search/styles";
import {searchKeywordState} from "../../states/searchKeywordState";

const SearchForm = ({ setMovies }) => {
  const [value, setValue] = useRecoilState(searchKeywordState);

  const onSubmitSearch = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onChangeValue = useCallback(async (e) => {
    setValue(e.target.value);
    try {
      const { data } = await axios.get('/api/search', {
        params: {
          query: e.target.value,
        },
      });
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  }, [value]);

  console.log(`Keyword: ${value}`);

  return (
    <SearchFormWrapper onSubmit={onSubmitSearch}>
      <p>
        영화 검색
      </p>
      <InputWrapper>
        <input
          type="text"
          onChange={onChangeValue}
          placeholder="키워드"
        />
        <SearchIcon />
      </InputWrapper>
    </SearchFormWrapper>
  );
};

export default memo(SearchForm);
