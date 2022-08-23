import React, { useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { addmessage } from 'services/store/messenger';

const Messenger = () => {

  // @ts-ignore
  let chatListRedux = useSelector((state) => state.messenger.chatList);
  // @ts-ignore
  let chatIdRedux = useSelector((state) => state.messenger.chatId);
  // @ts-ignore
  const dispatch = useDispatch();

  useEffect(() => {
    if (getSender() === 'user')
    setTimeout(() => dispatch(addmessage({
      author: "Робот",
      text: "Техническая поддержка свяжется с Вами в ближайшее время",
      sender: "robot",
      time: new Date().toTimeString()
    })), 1500);
  }, [getSender()]);

  function getMessageList() {
    return chatListRedux?.find(x => x.id === chatIdRedux).messageList;
  }

  function getSender() {
    return getMessageList().slice(-1).find(x => true)?.sender;
  }

  return (
    <div className="Messenger">
      <Form/>
      <Grid container>
        <Grid item xs={3}>
          <Chatlist list={chatListRedux}/>
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route path="/:chatId" element={<Chat list={getMessageList()}/>} />
            <Route path="*" element={<ChatNotFound/>} />
          </Routes>
        </Grid>
      </Grid>
  </div>
)};

Messenger.propTypes = {};

Messenger.defaultProps = {};

export default Messenger;
