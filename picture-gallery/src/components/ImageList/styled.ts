import styled from "styled-components";
export const ImageElement = styled.img`
  width: 250px;
  height: 300px;
  padding: 5px;
  margin-bottom: 15px;
  transition: transform 0.5 ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;