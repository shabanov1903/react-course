import { createSlice } from '@reduxjs/toolkit'
import { addMessageAsyncThunk, getAccountFullDataThunk, addChatThunk, deleteChatThunk } from "../thunk/extraReducers"

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState: {
    chatList: [],
    chatId: 1
  },
  reducers: {
    addchat: (state, action) => {
      let max = Math.max(...state.chatList.map(x => x.id));
      isFinite(max) ? max = max : max = 0;
      return {
        ...state,
        chatList: [...state.chatList, {
            id: max + 1,
            name: action.payload,
            messageList: []
        }]
      }
    },
    removechat: (state, action) => {
      const pos = state.chatList.findIndex(x => x.id === action.payload);
      let arr = [...state.chatList];
      arr.splice(pos, 1);
      return {
        ...state,
        chatList: [...arr]
      }
    },
    changeId: (state, action) => {
      state.chatId = action.payload;
    },
    addmessage: (state, action) => {
      state.chatList.find(chat => chat.id === state.chatId).messageList.push(action.payload);
    },
  },
  extraReducers: {
    [addMessageAsyncThunk.fulfilled]: (store, action) => {
      store.chatList.find(chat => chat.id === store.chatId).messageList.push(action.payload);
    },
    [getAccountFullDataThunk.fulfilled]: (store, action) => {
      return {
        ...store,
        chatList: action.payload
      }
    },
    [addChatThunk.fulfilled]: (store, action) => {
      return {
        ...store,
        chatList: [...store.chatList, action.payload]
      }
    },
    [deleteChatThunk.fulfilled]: (store, action) => {
      const pos = store.chatList.findIndex(x => x.id === action.payload);
      let arr = [...store.chatList];
      arr.splice(pos, 1);
      return {
        ...store,
        chatList: [...arr]
      }
    },
  }
})

export const { addchat, removechat, changeId, addmessage } = messengerSlice.actions

export default messengerSlice.reducer
