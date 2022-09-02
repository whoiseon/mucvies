import styled from "@emotion/styled";

export const OttSection = styled.div`
  margin-bottom: 70px;
`;

export const Header = styled.h1`
  display: flex;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 70px;
  align-items: center;
  img {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    margin-right: 10px;
    object-fit: cover;
  }
  @media (max-width: 700px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 40px;
    font-size: 24px;
  }
`;

export const OttMovieCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const SkeletonWrapper = styled.div`

`;
