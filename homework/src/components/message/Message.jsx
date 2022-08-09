import './Message.scss';

export function Message(props) {

  const { text } = props;
  
  return <h1>{text}</h1>;
}