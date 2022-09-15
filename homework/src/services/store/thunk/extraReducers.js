import { createAsyncThunk } from '@reduxjs/toolkit'
import { addChat, addMessage, deleteChat, getChats, getMaxChatId, getMessages } from 'services/firebase/crud';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from 'services/firebase/firebase';

export const addMessageAsyncThunk = createAsyncThunk(
  'messenger/addMessageAsyncThunk',
  async (message) => {
    try {
      await addMessage(message);
      return message;
    } catch(e) {
        console.error(`Ошибка: ${e.message}`);
    }
  }
)

export const getAccountFullDataThunk = createAsyncThunk(
  'messenger/getAccountFullDataThunk',
  async (accountId) => {
    try {
      const chatsResponse = await getChats(accountId);
      const chats = chatsResponse.docs.map(e => e.data());
      let chatList = new Array();
      for (let i = 0; i < chats.length; i++) {
        const messagesResponse = await getMessages(chats[i]._id);
        const messages = messagesResponse.docs.map(e => e.data());
        chatList.push({
          id: chats[i]._id,
          name: chats[i].name,
          messageList: messages
        });
      }
      return chatList;
    } catch(e) {
        console.error(`Ошибка: ${e.message}`);
    }
  }
)

export const addChatThunk = createAsyncThunk(
  'messenger/addChatThunk',
  async ({chatName, accountId}) => {
    try {
      let maxChatId = await getMaxChatId();
      isFinite(maxChatId) ? maxChatId = maxChatId : maxChatId = 0;
      const newId = maxChatId + 1;
      
      const dbChat = {
        _id: newId,
        name: chatName,
        accountId: accountId
      };
      await addChat(dbChat);
      
      const chat = {
        id: newId,
        name: chatName,
        messageList: []
      };
      return chat;
    } catch(e) {
        console.error(`Ошибка: ${e.message}`);
    }
  }
)

export const deleteChatThunk = createAsyncThunk(
  'messenger/deleteChatThunk',
  async (chatId) => {
    try {
      await deleteChat(chatId);
      return chatId;
    } catch(e) {
        console.error(`Ошибка: ${e.message}`);
    }
  }
)

export const createUserThunk = createAsyncThunk(
  'user/addUserThunk',
  async ({email, pass}) => {
    try {
      const userCredit = await createUserWithEmailAndPassword(auth, email, pass);
      const userData =  {
        email: userCredit.user.email,
        id: userCredit.user.uid,
        token: userCredit.user.accessToken
      }
      return userData
    } catch(e) {
      console.error(`Ошибка: ${e.message}`);
    }
  }
)

export const loginThunk = createAsyncThunk(
  'user/loginThunk',
  async ({email, pass}) => {
    try {
      const userCredit = await signInWithEmailAndPassword(auth, email, pass);
      const userData = {
        email: userCredit.user.email,
        id: userCredit.user.uid,
        token: userCredit.user.accessToken
      }
      return userData
    } catch(e) {
      console.error(`Ошибка: ${e.message}`);
    }
  }
)
