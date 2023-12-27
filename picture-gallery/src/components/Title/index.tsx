import styled, {css} from 'styled-components';
const Title = styled.h1<{ $largeFont?: boolean; }>`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  ${props =>
    props.$largeFont &&
    css`
      font-size: 36px;
    `};
`;
export default Title