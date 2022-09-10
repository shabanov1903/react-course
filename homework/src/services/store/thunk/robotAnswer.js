import { addmessage } from "../slices/messenger";

export const robotAnswer = (dispatch, getState) => {
  setTimeout(() => dispatch(addmessage({
    author: "Робот",
    text: "Техническая поддержка свяжется с Вами в ближайшее время",
    sender: "robot",
    time: new Date().toTimeString()
  })), 1500);
}
