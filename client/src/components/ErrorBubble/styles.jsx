import styled from "@emotion/styled";
import {keyframes} from "@emotion/css";
import {RED_COLOR} from "../../styles/common";

const ErrorBubbleAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Bubble = styled.div`
  position: absolute;
  top: -50px;
  left: 60px;
  animation: ${ErrorBubbleAnimation} 0.4s ease-in;
`;

export const BubbleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 14px;
`;

export const Content = styled.div`
  padding: 14px 20px;
  border-radius: 14px;
  background-color: ${RED_COLOR};
`;

export const Triangle = styled.div`
  position: absolute;
  background-color: ${RED_COLOR};
  transform: rotate(45deg);
  padding: 10px;
  bottom: -6px;
`;
