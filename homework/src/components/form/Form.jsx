import './Form.scss';
import { useState } from 'react';

export default function Form(props) {

  const { setList } = props;
  
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const click = () => {
    fill(author, text, "user");
  }

  function fill(author, text, sender) {
    if (text === '' || author === '') return;
    setList(state => [...state, {
      author: author,
      text: text,
      sender: sender,
      time: new Date().toTimeString()
    }]);
    setText('');
  }
  
  return(
    <div>
      <label>Автор</label> <br/>
      <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)}></input> <br/>
      <label>Текст</label> <br/>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)}></input> <br/>
      <button onClick={click}>Отправить</button> <br/>
    </div>
  );
}