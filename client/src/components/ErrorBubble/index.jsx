import {Bubble, BubbleWrapper, Content, Triangle} from "./styles";

const ErrorBubble = ({ content }) => {
  return (
    <Bubble>
      <BubbleWrapper>
        <Content>
          { content }
        </Content>
        <Triangle />
      </BubbleWrapper>
    </Bubble>
  );
};

export default ErrorBubble;
