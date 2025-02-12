import { TitleStyle } from './Title.styled.js';

export default function Title({ title }) {
  return <div>{title && <TitleStyle>{title}</TitleStyle>}</div>;
}
