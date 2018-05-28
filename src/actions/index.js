import { ADD_REMINDER } from '../constant.js';

//Action creator addReminder
export const addReminder = (text) => {
  //Action
  const action = {
    type: ADD_REMINDER,
    text //short for text: text
  }

  console.log('action in addReminder', action);
  return action;
}

export default addReminder;
