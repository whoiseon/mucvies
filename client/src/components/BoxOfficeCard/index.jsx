import {CardWrapper, MovieImg, MovieInfo} from "./styles";

const BoxOfficeCard = ({ data }) => {
  return (
    <CardWrapper>
      <MovieImg>
        <img src={data.image} alt="boxoffice_image" />
      </MovieImg>
      <MovieInfo>
        <p>{ data.attendance }</p>
        <p>{ data.title }</p>
      </MovieInfo>
    </CardWrapper>
  );
};

export default BoxOfficeCard;
