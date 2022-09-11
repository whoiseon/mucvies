import {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import AppLayout from "../../components/AppLayout";

const Movie = () => {
  const params = useParams();
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBoxOffice = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/api/movie', {
        params: {
          movieCode: params.code,
        },
      });
      setMovieData(data);
      setIsLoading(false);
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      console.log(message);
    }
  }, [params.code]);

  useEffect(() => {
    fetchBoxOffice();
  }, [params.code]);

  return (
    <AppLayout>
      <img src={movieData.image} alt="movie_poster" width="200px" />
      <p>
        { movieData.title }
      </p>
      <p>
        { movieData.subTitle }
      </p>
      <p>
        개봉일: { movieData.release }
      </p>
      <p>
        장르: { movieData.genre }
      </p>
      <p>
        국가: { movieData.country }
      </p>
      <p>
        등급: { movieData.rank }
      </p>
      <p>
        상영 시간: { movieData.runningTime }
      </p>
      <p>
        평점: { movieData.평점 }
      </p>
      <p>
        관객수: { movieData.attendance }
      </p>
    </AppLayout>
  );
};

export default Movie;
