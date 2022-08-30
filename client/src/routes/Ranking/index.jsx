import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import AppLayout from "../../components/AppLayout";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  const fetchRanking = useCallback(async () => {
    try {
      const { data } = await axios.get('/api/ranking');
      setRanking(data);
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      console.log(message);
    }
  }, []);

  useEffect(() => {
    fetchRanking();
  }, []);

  console.log(ranking);

  return (
    <AppLayout>
      랭킹
    </AppLayout>
  );
};

export default Ranking;
