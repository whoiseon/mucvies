import styled from "@emotion/styled";
import {keyframes} from "@emotion/css";
import {BACKGROUND_COLOR, BLUE_COLOR, BUTTON_HOVER, GRAY_COLOR, RED_COLOR, WHITE_COLOR} from "../../styles/common";

export const CardWrapper = styled.div`
  width: 20%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  @media (max-width: 1240px) {
    width: 25%;
  }
  @media (max-width: 1080px) {
    width: 33%;
  }
  @media (max-width: 700px) {
    width: 50%;
  }
`;

export const MovieImg = styled.div`
  position: relative;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 340px;
    border-radius: 14px;
    object-fit: cover;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    @media (max-width: 1240px) {
      height: 300px;
    }
    @media (max-width: 1080px) {
      height: 280px;
    }
    @media (max-width: 700px) {
      height: 280px;
    }
  }
`;

export const MovieInfo = styled.div`
  p {
    text-align: left;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 0;
    i {
      font-style: normal;
      color: ${WHITE_COLOR};
      opacity: 0.7;
    }
`;

const MovieExplainAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const MovieExplain = styled.div`
  position: absolute;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  cursor: pointer;
  top: 0;
  animation: ${MovieExplainAnimation} 0.1s ease-in;
  p {
    display: -webkit-box;
    overflow: hidden;
    line-height: 16px;
    text-overflow: ellipsis;
    max-height: 100px;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
  
`;

export const RankWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 4px solid ${BACKGROUND_COLOR};
  top: -12px;
  left: -12px;
  width: 32px;
  height: 32px;
  z-index: 999;
  background-color: ${RED_COLOR};
  p {
    padding-bottom: 2px;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const NoThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 340px;
  background-color: #161616;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  svg {
    font-size: 54px;
    margin-bottom: 20px;
    opacity: 0.5;
  }
  p {
    font-size: 18px;
    opacity: 0.5;
  }
  @media (max-width: 1240px) {
    height: 300px;
  }
  @media (max-width: 1080px) {
    height: 280px;
  }
  @media (max-width: 700px) {
    height: 280px;
  }
`;
