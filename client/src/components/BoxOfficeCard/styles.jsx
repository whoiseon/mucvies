import styled from "@emotion/styled";
import {keyframes} from "@emotion/css";
import {BACKGROUND_COLOR, BLUE_COLOR, BUTTON_HOVER, GRAY_COLOR, RED_COLOR, WHITE_COLOR} from "../../styles/common";

const CardShowAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardWrapper = styled.div`
  width: 20%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  animation: ${(props) => (props.skeleton ? '' : `${CardShowAnimation} 0.4s ease-in;`)};
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
  a {
    display: block;
  }
`;

export const MovieInfo = styled.div`
  p {
    margin: 0;
    text-align: left;
    i {
      font-style: normal;
      color: ${WHITE_COLOR};
      opacity: 0.7;
    }
  }
  p:nth-of-type(1) {
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 10px;
    color: ${GRAY_COLOR};
  }
  a {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 0;
    &:hover {
      text-decoration: underline;
    }
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
  width: 34px;
  height: 34px;
  z-index: 99;
  background-color: ${BLUE_COLOR};
  p {
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
