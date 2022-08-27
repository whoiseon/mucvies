import styled from "@emotion/styled";
import {BLUE_COLOR} from "../../styles/common";

export const CardWrapper = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  &:not(:nth-of-type(5n)) {
    margin-right: 20px;
  }
`;

export const MovieImg = styled.div`
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 300px;
    border-radius: 14px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
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
