import BlockIcon from '@mui/icons-material/Block';
import {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {CardWrapper, MovieExplain, MovieImg, MovieInfo, NoThumbnail, RankWrapper} from "./styles";

const BoxOfficeCard = ({ data }) => {
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const sliceAttendance = data.attendance.slice(3);

  const onMouseEnterImage = useCallback(() => {
    setShowMovieInfo(true);
  }, []);

  const onMouseLeaveImage = useCallback(() => {
    setShowMovieInfo(false);
  }, []);

  return (
    <CardWrapper skeleton={false}>
      <MovieImg
        onMouseEnter={onMouseEnterImage}
        onMouseLeave={onMouseLeaveImage}
      >
        {
          data.image
            ? <img src={data.image} alt="boxoffice_image" />
            : (
              <NoThumbnail>
                <BlockIcon />
                <p>썸네일 이미지가</p>
                <p>없습니다</p>
              </NoThumbnail>
            )
        }
        <RankWrapper>
          <p>
            { data.rank }
          </p>
        </RankWrapper>
        {
          showMovieInfo && (
            <Link to={`/movie/${data.code}`} state={{ summary: data.info }}>
              <MovieExplain>
                <p>
                  {
                    data.info
                  }
                </p>
              </MovieExplain>
            </Link>
          )
        }
      </MovieImg>
      <MovieInfo>
        <p>{ sliceAttendance }</p>
        <Link to={`/movie/${data.code}`} state={{ summary: data.info }}>
          { data.title }
        </Link>
      </MovieInfo>
    </CardWrapper>
  );
};

export default BoxOfficeCard;
