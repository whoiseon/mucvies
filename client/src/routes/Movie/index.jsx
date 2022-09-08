import {useParams} from "react-router-dom";
import AppLayout from "../../components/AppLayout";

const Movie = () => {
  const params = useParams();

  return (
    <AppLayout>
      {params.code}
    </AppLayout>
  );
};

export default Movie;
