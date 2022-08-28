import styled from "@emotion/styled";
import {BLUE_COLOR} from "../../styles/common";

export const CardWrapper = styled.div`
  width: 20%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  @media (max-width: 1400px) {
    width: 25%;
  }
  @media (max-width: 1180px) {
    width: 33%;
  }
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    width: 33%;
  }
  @media (max-width: 570px) {
    width: 50%;
  }
`;

export const MovieImg = styled.div`
  margin-bottom: 14px;
  img {
    width: 100%;
    height: 260px;
    border-radius: 14px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    @media (max-width: 640px) {
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
    b {
      color: ${BLUE_COLOR};
    }
  }
`;
