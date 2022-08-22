import './App.scss';
import Form from './components/form/Form';
import Chat from './components/chat/Chat';
import Chatlist from './components/chatlist/Chatlist';
import Theme from './components/theme/Theme';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Themes } from './styles/Themes';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [sender, setSender] = useState();
  const [theme, setTheme] = useState(Themes.light);

  const chatList = [
    {id: 1, name: "Пожарная служба"},
    {id: 1, name: "Полиция"},
    {id: 1, name: "Скорая помощь"},
    {id: 1, name: "Техническая поддержка"}
  ]
  
  useEffect(() => {
    if (messageList.length > 0 && sender === "user")
    setTimeout(() => setMessageList(state => [...state, {
      author: "Робот",
      text: "Техническая поддержка свяжется с Вами в ближайшее время",
      sender: "robot",
      time: new Date().toTimeString()
    }]), 1500);
  }, [sender]);

  useEffect(() => {
    setSender(messageList.slice(-1).find(x => true)?.sender);
  }, [messageList]);

  return (
    <ThemeProvider theme={theme}>
      <Theme setTheme={setTheme}/>
      <Form setList={setMessageList}/>
      <Grid container>
        <Grid item xs={3}>
          <Chatlist list={chatList}/>
        </Grid>
        <Grid item xs={9}>
          <Chat list={messageList}/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
