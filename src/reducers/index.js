import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constant';
// import { bake_cookie, read_cookie } from 'sfcookies';
import Cookies from 'universal-cookie';

//Add reminder
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
  console.log('new reduced reminders', reminders);
  return reminders;
}

const reminders = (state = [], action) => {
  let reminders = null;
  //Initialize state with data at reminders cookie if any
  const cookies = new Cookies();
  state = cookies.getAll('reminders');
  // state = read_cookie('reminders');
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, newReminder(action)];
      //Save the content of reminders into a cookie
      cookies.set('reminders', reminders, { path: '/', expires: new Date(Date.now()+31592000000) });
      // bake_cookie('reminders', reminders);
      return reminders;

      case DELETE_REMINDER:
        reminders = removeById(state, action.id);
        cookies.set('reminders', reminders, { path: '/', expires: new Date(Date.now()+31592000000) });
        // bake_cookie('reminders', reminders);
        return reminders;

      case CLEAR_REMINDERS:
        reminders = [];
        cookies.set('reminders', reminders, { path: '/', expires: new Date(Date.now()+31592000000) });
        // bake_cookie('reminders', reminders);
        return reminders;
    default:
      return state;
  }
}

export default reminders;
