import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Messenger.scss';
import { Grid } from '@mui/material';
import Chat, { ChatNotFound } from 'components/chat/Chat';
import Chatlist from 'components/chatlist/Chatlist';
import Form from 'components/form/Form';
import {
  Routes,
  Route,
} from "react-router-dom";

const Messenger = () => {
  
  const [messageList, setMessageList] = useState([]);
  const [sender, setSender] = useState();
  const [chatList, setСhatList] = useState([
    {id: 1, name: "Пожарная служба", messageList: []},
    {id: 2, name: "Полиция", messageList: []},
    {id: 3, name: "Скорая помощь", messageList: []},
    {id: 4, name: "Техническая поддержка", messageList: []}
  ]);
  
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
    <div className="Messenger">
    <Form setList={setMessageList}/>
      <Grid container>
        <Grid item xs={3}>
          <Chatlist list={chatList} change={setСhatList}/>
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route path="/:id" element={<Chat list={messageList}/>} />
            <Route path="*" element={<ChatNotFound/>} />
          </Routes>
        </Grid>
      </Grid>
  </div>
)};

Messenger.propTypes = {};

Messenger.defaultProps = {};

export default Messenger;
