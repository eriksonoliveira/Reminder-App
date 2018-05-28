import { ADD_REMINDER } from '../constant';

//***Reminder reducer***//
const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const reminders = (state = [], action) => {
  let reminders = null;
  switch(action.type) {
    case ADD_REMINDER:
      //spread operator. Copies the content of an array into another array
      reminders = [...state, reminder(action)];
      console.log('reminders as state', reminders);

      return reminders;
    default:
      return state;
  }
}

export default reminders;
