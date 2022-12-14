import styled from "@emotion/styled";
import {GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 70px;
  @media (max-width: 700px) {
    margin-bottom: 40px;
  }
  p {
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 4px;
  }
  button {
    padding: 12px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  height: 320px;
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
  & > div:nth-of-type(1) {
    margin-right: 40px;
    width: 240px;
    @media (max-width: 700px) {
      width: auto;
      margin-right: 0;
      margin-bottom: 20px;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 14px;
    }
    span {
      width: 100%;
      height: 100%;
    }
  }
  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    @media (max-width: 700px) {
      
    }
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: column;
  div {
    margin-bottom: 12px;
    display: flex;
    color: ${WHITE_COLOR};
    @media (max-width: 700px) {
      margin-bottom: 10px;
    }
    span {
      color: ${GRAY_COLOR};
      margin-right: 10px;
    }
  }
`;

export const MovieTitle = styled.div`
  width: 100%;
  margin-bottom: 40px;
  p:nth-of-type(1) {
    width: 100%;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p:nth-of-type(2) {
    width: 100%;
    font-size: 18px;
    color: ${GRAY_COLOR};
  }
  span:nth-of-type(1) {
    margin-bottom: 10px;
  }
`;

export const MovieSummary = styled.div`
  p:nth-of-type(1) {
    font-size: 18px;
    font-weight: bold;
    color: ${GRAY_COLOR};
    margin-bottom: 20px;
  }
  p:nth-of-type(2) {
    line-height: 32px;
    width: 70%;
    span {
      margin-bottom: 10px;
    }
    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;
