import './Form.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addmessage } from 'services/store/slices/messenger';

export default function Form() {

  // @ts-ignore
  const dispatch = useDispatch();
  
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const textRef = useRef(null);
  const theme = useTheme();

  // @ts-ignore
  let chatIdRedux = useSelector((state) => state.messenger.chatId);

  const click = () => {
    fill(author, text, "user");
    focus();
  }

  function fill(author, text, sender) {
    if (text === '' || author === '' || chatIdRedux !== getUrlId()) return;
    dispatch(addmessage({
      author: author,
      text: text,
      sender: sender,
      time: new Date().toTimeString()
    }));
    setText('');
  }

  function focus() {
    textRef.current.focus()
  }

  function getUrlId() {
    const path = window.location.href;
    const index = path.lastIndexOf('/');
    return parseInt(path.slice(index + 1));
  }
  
  return(
    <div>
      <Box
        component="form"
        // @ts-ignore
        sx={{ bgcolor: theme.background, borderRadius: 2 }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Автор"
          variant="outlined"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          autoFocus={true}
          sx={{marginTop: "10px"}}/>
        <TextField
          label="Текст"
          variant="outlined"
          value={text}
          onChange={(event) => setText(event.target.value)}
          inputRef={textRef}/>
        <Button variant="outlined" endIcon={<SendIcon/>} onClick={click} className="send-button">Отправить</Button>
      </Box>
    </div>
  );
}