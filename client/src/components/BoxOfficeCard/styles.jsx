import styled from "@emotion/styled";
import {BACKGROUND_COLOR, BLUE_COLOR, RED_COLOR} from "../../styles/common";

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
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    @media (max-width: 1240px) {
      height: 300px;
    }
    @media (max-width: 1080px) {
      height: 280px;
    }
    @media (max-width: 700px) {
      height: 320px;
    }
  }
`;

export const MovieInfo = styled.div`
  p {
    margin: 0;
    text-align: left;
  }
  p:nth-of-type(1) {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: normal;
    opacity: 0.5;
  }
  p:nth-of-type(2) {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 0;
  }
`;

export const RankWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  outline: 4px outset ${BACKGROUND_COLOR};
  top: -12px;
  left: -12px;
  width: 26px;
  height: 26px;
  background-color: ${RED_COLOR};
  p {
    padding-bottom: 2px;
    font-size: 14px;
    font-weight: bold;
  }
`;
