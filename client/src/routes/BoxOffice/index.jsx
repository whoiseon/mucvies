import {useRecoilState} from "recoil";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import AppLayout from "../../components/AppLayout";
import {BoxOfficeWrapper, Header} from "./styles";
import {boxofficeState} from "../../states/boxofficeState";

const BoxOffice = () => {
  const [boxoffice, setBoxoffice] = useRecoilState(boxofficeState);
  const [isLoading, setIsLoading] = useState(false);

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
              boxoffice.map((data, i) => {
                return (
                  <img src={data.image} alt="boxoffice_image" />
                );
              })
            )
        }
      </BoxOfficeWrapper>
    </AppLayout>
  );
};

export default BoxOffice;
