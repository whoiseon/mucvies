import BlockIcon from "@mui/icons-material/Block";
import {CardWrapper, MovieExplain, MovieImg, MovieInfo, NoThumbnail, RankWrapper} from "./styles";

const OttCard = ({ data }) => {
  return (
    <CardWrapper>
      <MovieImg>
        {
          data.image
            ? <img src={data.image} alt="ott_image" />
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
        <p>{ data.title }</p>
      </MovieInfo>
    </CardWrapper>
  );
};

export default OttCard;
