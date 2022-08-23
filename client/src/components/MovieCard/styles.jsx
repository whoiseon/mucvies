import styled from "@emotion/styled";
import {BLUE_COLOR} from "../../styles/common";

export const CardWrapper = styled.div`
  max-width: 180px;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  &:not(:nth-of-type(5n)) {
    margin-right: 30px;
  }
  @media (max-width: 1540px) {
    &:not(:nth-of-type(4n)) {
      margin-right: 30px;
    }
  }
  @media (max-width: 1339px) {
    &:not(:nth-of-type(3n)) {
      margin-right: 30px;
    }
  }
`;

export const MovieImg = styled.div`
  margin-bottom: 14px;
  img {
    width: 180px;
    height: 260px;
    border-radius: 14px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  }
`;

export const MovieInfo = styled.div`
  p {
    margin: 0;
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
    b {
      color: ${BLUE_COLOR};
    }
  }
`;
