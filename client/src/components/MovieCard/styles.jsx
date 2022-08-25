import styled from "@emotion/styled";
import {BLUE_COLOR} from "../../styles/common";

export const CardWrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  @media (min-width: 1570px) {
    width: 180px;
    &:not(:nth-of-type(5n)) {
      margin-right: 20px;
    }
  }
  @media (min-width: 1370px) {
    &:not(:nth-of-type(4n)) {
      margin-right: 20px;
    }
  }
  @media (min-width: 1170px) {
    &:not(:nth-of-type(3n)) {
      margin-right: 20px;
    }
  }
  @media (min-width: 970px) {
    &:not(:nth-of-type(2n)) {
      margin-right: 20px;
    }
  }
  @media (max-width: 640px) {
    width: 220px;
  }
  @media (min-width: 620px) {
    width: 180px;
    &:not(:nth-of-type(3n)) {
      margin-right: 20px;
    }
  }
  @media (min-width: 500px) {
    &:not(:nth-of-type(2n)) {
      margin-right: 20px;
    }
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
