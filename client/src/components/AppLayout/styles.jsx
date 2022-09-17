import styled from "@emotion/styled";
import {BACKGROUND_COLOR, BUTTON_HOVER, GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const Background = styled.div`
  @media (max-width: 700px) {
    flex-direction: column;
    padding-top: 0;
  }
  width: 100%;
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 70px;
`;

export const LeftMenu = styled.div`
  min-width: 200px;
  margin-right: 30px;
  h1 {
    font-size: 28px;
    margin-bottom: 70px;
    padding: 0 20px;
  }
  ul {
    li {
      width: 100%;
      a {
        display: flex;
        background-color: ${BACKGROUND_COLOR};
        font-weight: 500;
        border-radius: 14px;
        align-items: center;
        padding: 20px;
        width: 100%;
        color: ${GRAY_COLOR};
        transition: color, background-color 0.16s ease-in;
        svg {
          margin-right: 14px;
        }
        &:hover {
          background-color: ${BUTTON_HOVER};
          color: ${WHITE_COLOR};
        }
        &:active {
          background-color: #404040;
        }
      }
    }
  }
`;

export const ResultArea = styled.div`
  @media (max-width: 700px) {
    padding: 0 20px;
  }
  width: 100%;
`;

// Mobile Components

export const MobileTopBar = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  background-color: ${BACKGROUND_COLOR};
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  z-index: 999;
`;

export const MobileLogo = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: ${WHITE_COLOR};
    padding-left: 20px;
  }
`;

export const MenuBtn = styled.div`
  padding: 0 20px;
  cursor: pointer;
  margin-left: auto;
`;

export const MenuBottomLine = styled.div`
  position: absolute;
  bottom: -1px;
  width: 100%;
  height: 1px;
  background-color: ${WHITE_COLOR};
  opacity: 0.1;
`;

export const FooterWrapper = styled.div`
  padding: 20px;
  margin-top: 40px;
  font-size: 14px;
  p {
    margin-bottom: 6px;
    opacity: 0.3;
    line-height: 24px;
    transition: opacity 0.2s ease-in;
    &:hover {
      opacity: 0.5;
    }
  }
  p:nth-of-type(2) {
    margin-top: 20px;
    width: 160px;
  }
  @media (max-width: 700px) {
    position: absolute;
    bottom: 0;
    width: 250px;
    p {
      width: 100%;
    }
    p:nth-of-type(2) {
      width: 100%;
    }
  }
`;
