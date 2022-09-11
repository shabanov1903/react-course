import { addMessageAsyncThunk } from "./extraReducers";

export const robotAnswer = (dispatch, getState) => {
  const state = getState();
  const message = {
    author: "Робот",
    text: "Техническая поддержка свяжется с Вами в ближайшее время",
    sender: "robot",
    time: new Date().toTimeString(),
    chatId: state.messenger.chatId
  }

  setTimeout(() => dispatch(addMessageAsyncThunk({...message, chatId: state.messenger.chatId})), 1500);
}
