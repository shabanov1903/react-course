import { createSlice } from '@reduxjs/toolkit'

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState: {
    chatList: [{id: 1, name: "Пример чата", messageList: []}],
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
        state.chatList.find(chat => chat.id === state.chatId)
            .messageList.push(action.payload);
      },
  },
})

export const { addchat, removechat, changeId, addmessage } = messengerSlice.actions

export default messengerSlice.reducer