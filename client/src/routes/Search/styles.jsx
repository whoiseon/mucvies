import styled from "@emotion/styled";
import {BUTTON_HOVER, INPUT_COLOR, WHITE_COLOR} from "../../styles/common";

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
  justify-content: space-between;
  width: 100%;
`;

export const SearchOptionWrapper = styled.div`

`;
