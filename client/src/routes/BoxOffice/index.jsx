import {useRecoilState} from "recoil";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import AppLayout from "../../components/AppLayout";
import {BoxOfficeMovieCard, BoxOfficeWrapper, Header} from "./styles";
import {boxofficeState} from "../../states/boxofficeState";
import BoxOfficeCard from "../../components/BoxOfficeCard";

const BoxOffice = () => {
  const [boxoffice, setBoxoffice] = useRecoilState(boxofficeState);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBoxOffice = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('/api/boxoffice');
      setBoxoffice(data);
      setIsLoading(false);
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      console.log(message);
    }
  }, []);

  useEffect(() => {
    fetchBoxOffice();
  }, []);

  return (
    <AppLayout>
      <Header>
        박스오피스
      </Header>
      <BoxOfficeWrapper>
        {
          isLoading
            ? <div>로딩중</div>
            : (
              <BoxOfficeMovieCard>
                {
                  boxoffice.map((data, i) => {
                    return (
                      <BoxOfficeCard key={data.title} data={data} />
                    );
                  })
                }
              </BoxOfficeMovieCard>
            )
        }
      </BoxOfficeWrapper>
    </AppLayout>
  );
};

export default BoxOffice;
