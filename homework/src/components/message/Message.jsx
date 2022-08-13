import './Message.scss';
import cn from 'classnames';

export default function Message({message}) {
  
  return(
    <div className={cn(
      'message',
      message.sender
    )}>
      <div><strong>Автор:</strong> {message.author}</div>
      <div><strong>Сообщение:</strong> {message.text}</div>
      <div><strong>Время:</strong> {message.time}</div>
    </div>
  );
}