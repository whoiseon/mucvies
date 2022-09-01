import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {useRecoilState} from "recoil";
import AppLayout from "../../components/AppLayout";
import {ottState} from "../../states/ottState";
import {Header, OttSection} from "./styles";

const OTT = () => {
  const [ott, setOtt] = useRecoilState(ottState);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRanking = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/api/ott');
      setOtt(data);
      setIsLoading(false);
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      console.log(message);
    }
  }, []);

  useEffect(() => {
    fetchRanking();
  }, []);

  console.log(ott);

  return (
    <AppLayout>
      {
        isLoading
          ? '로딩중'
          : (
            ott.map((data, i) => {
              return (
                <OttSection>
                  <Header>
                    { data.title }
                  </Header>
                  { data.movie[0].title }
                  { data.movie[1].title }
                  { data.movie[2].title }
                  { data.movie[3].title }
                  { data.movie[4].title }
                  { data.movie[5].title }
                </OttSection>
              );
            })
          )
      }
    </AppLayout>
  );
};

export default OTT;
