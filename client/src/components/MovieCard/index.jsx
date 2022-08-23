import {CardWrapper, MovieImg, MovieInfo} from "./styles";
import noThumbnailImg from "../../asset/no_thumbnail.svg";

const MovieCard = ({ item }) => {
  return (
    <CardWrapper>
      <MovieImg>
        <img src={item.image || noThumbnailImg} alt="movie_img" />
      </MovieImg>
      <MovieInfo>
        <p>{ `평점 ${item.userRating}` }</p>
        <p
          dangerouslySetInnerHTML={{ __html: item.title }}
        />
      </MovieInfo>
    </CardWrapper>
  );
};

export default MovieCard;
