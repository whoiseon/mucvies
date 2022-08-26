import styled from "@emotion/styled";
import {BLUE_COLOR, BLUE_HOVER, BUTTON_HOVER, INPUT_COLOR, WHITE_COLOR} from "../../styles/common";

export const SearchWrapper = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const SearchFormWrapper = styled.form`
  min-width: 300px;
  margin-right: 30px;
  @media (max-width: 700px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Header = styled.p`
  font-size: 22px;
  font-weight: bold;
  opacity: 0.5;
  padding-top: 6px;
  margin-bottom: 70px;
  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  input {
    width: 100%;
    font-size: 16px;
    padding: 22px 18px 22px 58px;
    border-radius: 14px;
    background-color: ${INPUT_COLOR};
    color: ${WHITE_COLOR};
  }
  svg {
    position: absolute;
    left: 18px;
    top: 20px;
    opacity: ${(props) => (props.focus ? '1' : '0.5')};
  }
`;

export const SearchResult = styled.div`
  width: 100%;
  margin-right: 30px;
  p {
    font-size: 22px;
    font-weight: bold;
    padding-top: 6px;
    margin-bottom: 70px;
  }
  @media (max-width: 700px) {
    & > p {
      padding-top: 0;
      text-align: center;
      margin-bottom: 40px;
    }
  }
`;

export const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ResultMovieCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const SearchOptionWrapper = styled.div`

`;

export const SearchButtonWrapper = styled.div`
  button {
    width: 100%;
    padding: 20px;
    text-align: center;
    font-size: 16px;
    border-radius: 14px;
    font-weight: bold;
    margin-top: 40px;
    background-color: ${BLUE_COLOR};
    transition: background-color 0.16s ease-in;
    &:hover {
      background-color: ${BLUE_HOVER};
    }
    &:active {
      background-color: #006DDD;
    }
  }
`;

export const SkeletonWrapper = styled.div`
  span {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;
