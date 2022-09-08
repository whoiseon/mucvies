import {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import BlockIcon from "@mui/icons-material/Block";
import {CardWrapper, MovieExplain, MovieImg, MovieInfo, NoThumbnail, RankWrapper} from "../BoxOfficeCard/styles";
import { GRAY_COLOR } from "../../styles/common";

const RankingCard = ({ data }) => {
  const [showMovieInfo, setShowMovieInfo] = useState(false);

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
            <Link to={`/movie/${data.code}`}>
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
        <p>평점 <i>{data.grade}</i> 예매율 <i>{data.num}</i></p>
        <Link to={`/movie/${data.code}`}>
          { data.title }
        </Link>
        <p style={{ fontSize: '14px', color: GRAY_COLOR, marginTop: '10px' }}>개봉일 {data.release}</p>
      </MovieInfo>
    </CardWrapper>
  );
};

export default RankingCard;
