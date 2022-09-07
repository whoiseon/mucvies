import styled from "@emotion/styled";
import {BACKGROUND_COLOR, BUTTON_HOVER, WHITE_COLOR} from "../../styles/common";

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  margin-bottom: 70px;
  span {
    padding-top: 4px;
    font-size: 22px;
    font-weight: bold;
  }
  div {
    margin-left: 40px;
    padding-top: 4px;
    a {
      color: #707070;
      padding: 10px 20px;
      background-color: ${BACKGROUND_COLOR};
      border-radius: 14px;
      transition: background-color, color 0.16s ease-in;
      &:hover {
        background-color: ${BUTTON_HOVER};
        color: ${WHITE_COLOR};
      }
      span {
        color: inherit;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 40px;
    div {
      margin: 30px 0;
      a {
        padding: 14px 24px;
        span {
          font-size: 18px;
        }
      }
    }
  }
`;

export const BoxOfficeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BoxOfficeMovieCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const SkeletonWrapper = styled.div`
  width: 100%;
  span {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;
