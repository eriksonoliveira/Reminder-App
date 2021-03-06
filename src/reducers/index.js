import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constant';
import { bake_cookie, read_cookie } from 'sfcookies';

//***Reminder reducer***//
const newReminder = (action) => {
  let { text, dueDate, dueTime } = action;
  return {
    id: Math.random(),
    text,
    dueDate,
    dueTime
  }
}

//Remove reminder
const removeById =(state = [], id) => {
  //Create a new array with all reminders in state except the one that the user
  //wants to remove
  const reminders = state.filter(reminder => reminder.id !== id);
  // console.log('new reduced reminders', reminders);
  return reminders;
}

const reminders = (state = [], action) => {
  let reminders = null;
  const expDate = new Date();
  expDate.setFullYear(new Date().getFullYear() + 1);

  //Initialize state with data found in reminders cookie if any exists
  state = read_cookie('reminders');
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, newReminder(action)];
      //Save the content of reminders into a cookie
      bake_cookie('reminders', reminders, expDate);
      return reminders;

      case DELETE_REMINDER:
        reminders = removeById(state, action.id);
        bake_cookie('reminders', reminders);
        return reminders;

      case CLEAR_REMINDERS:
        reminders = [];
        bake_cookie('reminders', reminders);
        return reminders;
    default:
      return state;
  }
}

export default reminders;
