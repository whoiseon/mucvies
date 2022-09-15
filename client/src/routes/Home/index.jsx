import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import Search from "../Search";
import AppLayout from "../../components/AppLayout";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('boxoffice/weekly');
  }, [navigate]);

  return (
    <AppLayout>
      로딩중
    </AppLayout>
  );
};

export default Home;
