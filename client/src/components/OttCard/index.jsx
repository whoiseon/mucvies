import {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import BlockIcon from "@mui/icons-material/Block";
import {CardWrapper, MovieExplain, MovieImg, MovieInfo, NoThumbnail, RankWrapper} from "./styles";

const OttCard = ({ data }) => {
  const [imgAnimation, setImgAnimation] = useState(false);

  const onMouseEnterImage = useCallback(() => {
    setImgAnimation(true);
  }, []);

  const onMouseLeaveImage = useCallback(() => {
    setImgAnimation(false);
  }, []);

  return (
    <CardWrapper skeleton={false}>
      <MovieImg
        onMouseEnter={onMouseEnterImage}
        onMouseLeave={onMouseLeaveImage}
      >
        {
          data.image
            ? (
              <Link to={`/movie/${data.code}`}>
                <img src={data.image} alt="ott_image" />
              </Link>
            )
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
      </MovieImg>
      <MovieInfo>
        <Link to={`/movie/${data.code}`}>
          { data.title }
        </Link>
      </MovieInfo>
    </CardWrapper>
  );
};

export default OttCard;
