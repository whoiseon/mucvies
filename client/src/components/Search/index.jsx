import {useCallback, useState} from "react";
import axios from "axios";
import {useRecoilState} from "recoil";
import {movieState} from "../../states/movieState";
import {searchKeywordState} from "../../states/searchKeywordState";

const Search = () => {
  const [movies, setMovies] = useRecoilState(movieState);
  const [value, setValue] = useRecoilState(searchKeywordState);

  const onChangeValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmitMovie = useCallback(async (e) => {
    e.preventDefault();
    try {
      if (value === "") {
        setMovies([]);
        setValue('');
      } else {
        const { data } = await axios.get('/api/search', {
          params: {
            query: value,
          },
        });
        setMovies(data);
      }
    } catch (error) {
      console.error(error);
    }
  }, [value]);

  console.log(movies);

  return (
    <div>
      <form onSubmit={onSubmitMovie}>
        <input
          type="text"
          onChange={onChangeValue}
        />
        <button
          type="submit"
        >
          검색
        </button>
      </form>
    </div>
  );
};

export default Search;
