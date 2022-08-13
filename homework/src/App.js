import Message from './components/message/Message';
import Form from './components/form/Form';
import './App.scss';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [list, setList] = useState([]);
  const [sender, setSender] = useState();
  
  useEffect(() => {
    if (list.length > 0 && sender === "user")
    setTimeout(() => setList(state => [...state, {
      author: "Робот",
      text: "Техническая поддержка свяжется с Вами в ближайшее время",
      sender: "robot",
      time: new Date().toTimeString()
    }]), 1500);
  }, [sender]);

  useEffect(() => {
    setSender(list.slice(-1).find(x => true)?.sender);
  }, [list]);

  const clean = () => {
    setList([]);
  }

  return (
    <div className="App">
      <Form setList={setList}/>
      {
        list.map((el,i) => <Message key={i} message={el} sender={'robot'}/>)
      }
      {
        list.length > 0 &&
        (
          <div className='cleaner'>
            <button onClick={clean}>Очистить</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
