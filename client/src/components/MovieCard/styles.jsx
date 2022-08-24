import styled from "@emotion/styled";
import {BLUE_COLOR} from "../../styles/common";

export const CardWrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  @media (max-width: 580px) {
    width: 260px;
  }
  @media (max-width: 560px) {
    width: 250px;
  }
  @media (max-width: 560px) {
    width: 240px;
  }
  @media (max-width: 520px) {
    width: 230px;
  }
  @media (max-width: 500px) {
    width: 220px;
  }
  @media (max-width: 390px) {
    width: 164px;
  }
`;

export const MovieImg = styled.div`
  margin-bottom: 14px;
  img {
    width: 100%;
    height: 260px;
    border-radius: 14px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    @media (max-width: 580px) {
      height: 320px;
    }
    @media (max-width: 390px) {
      height: 260px;
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
