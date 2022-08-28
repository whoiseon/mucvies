import {CardWrapper, MovieImg, MovieInfo, RankWrapper} from "./styles";
import noThumbnailImg from "../../asset/no_thumbnail.svg";

const BoxOfficeCard = ({ data }) => {
  const sliceAttendance = data.attendance.slice(3);

  return (
    <CardWrapper>
      <MovieImg>
        <img src={data.image || noThumbnailImg} alt="boxoffice_image" />
        <RankWrapper>
          <p>
            { data.rank }
          </p>
        </RankWrapper>
      </MovieImg>
      <MovieInfo>
        <p>{ sliceAttendance }</p>
        <p>{ data.title }</p>
      </MovieInfo>
    </CardWrapper>
  );
};

export default BoxOfficeCard;
