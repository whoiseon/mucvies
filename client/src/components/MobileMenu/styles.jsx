import styled from "@emotion/styled";
import {keyframes} from "@emotion/css";
import {BACKGROUND_COLOR, BUTTON_HOVER} from "../../styles/common";

const MenuShowAnimation = keyframes`
  0% {
    transform: translateX(220px);
  }
  100% {
    transform: translateX(0);
  }
`;

const MenuBackgroundAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  overflow: hidden;
  animation: ${MenuBackgroundAnimation} 0.2s ease-in;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: ${BACKGROUND_COLOR};
  box-shadow: -6px 0 10px rgba(0, 0, 0, 0.1);
  animation: ${MenuShowAnimation} 0.2s ease-in;
  ul {
    width: 100%;
    li > a {
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 18px;
      padding: 14px 20px;
      transition: background-color 0.16s ease-in;
      &:hover {
        background-color: ${BUTTON_HOVER};
      }
      svg {
        margin-right: 14px;
      }
    }
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const CloseBtn = styled.div`
  padding: 16px 18px;
  cursor: pointer;
  margin-left: auto;
`;
