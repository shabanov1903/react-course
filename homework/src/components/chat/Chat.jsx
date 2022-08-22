import './Chat.scss';
import Message from '../message/Message';

export default function Chat({list}) {
  return(
    <div>
      {
        list.map((el,i) => <Message key={i} message={el}/>)
      }
    </div>
  );
}