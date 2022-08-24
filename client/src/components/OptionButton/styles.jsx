import styled from "@emotion/styled";
import {BUTTON_HOVER} from "../../styles/common";

export const Background = styled.div`
  margin-bottom: 20px;
  button {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 20px;
    width: 100%;
    border-radius: 14px;
    transition: background-color 0.16s ease-in;
    p {
      opacity: 0.5;
    }
    &:hover {
      background-color: ${BUTTON_HOVER};
      p {
        opacity: 1;
      }
    }
    &:active {
      background-color: #404040;
    }
    svg {
      margin-left: auto;
      opacity: 0.5;
    }
  }
`;

export const SelectWrapper = styled.div`
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  button {
    text-align: left;
    width: 50%;
    padding: 14px 20px;
  }
  @media (max-width: 700px) {
    max-width: 100%;
  }
`;
