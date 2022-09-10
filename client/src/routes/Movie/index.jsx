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
    </AppLayout>
  );
};

export default Movie;
