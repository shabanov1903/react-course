import './Chat.scss';
import Message from '../message/Message';
import React from 'react';

export default function Chat({list}) {
  return(
    <div>
      {
        list.map((el,i) => <Message key={i} message={el}/>)
      }
    </div>
  );
}

export function ChatNotFound() {
  return(
    <div className='not-found'>
      <h2>Выберите чат</h2>
    </div>
  );
}