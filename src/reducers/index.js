import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constant';
<<<<<<< HEAD
// import { bake_cookie, read_cookie } from 'sfcookies';
import Cookies from 'universal-cookie';

//Add reminder
=======
import { bake_cookie, read_cookie } from 'sfcookies';

//***Reminder reducer***//
>>>>>>> delete_reminder
const newReminder = (action) => {
  let { text, dueDate, dueTime } = action;
  return {
    id: Math.random(),
    text,
    dueDate,
    dueTime
  }
}

<<<<<<< HEAD
//Remove reminder
=======
>>>>>>> delete_reminder
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
<<<<<<< HEAD
  const cookies = new Cookies();
  state = cookies.getAll('reminders');
  // state = read_cookie('reminders');
=======
  state = read_cookie('reminders');
>>>>>>> delete_reminder
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, newReminder(action)];
      //Save the content of reminders into a cookie
<<<<<<< HEAD
      cookies.set('reminders', reminders, { path: '/', expires: new Date(Date.now()+31592000000) });
      // bake_cookie('reminders', reminders);
=======
      bake_cookie('reminders', reminders);
>>>>>>> delete_reminder
      return reminders;

      case DELETE_REMINDER:
        reminders = removeById(state, action.id);
<<<<<<< HEAD
        cookies.set('reminders', reminders, { path: '/', expires: new Date(Date.now()+31592000000) });
        // bake_cookie('reminders', reminders);
=======
        bake_cookie('reminders', reminders);
>>>>>>> delete_reminder
        return reminders;

      case CLEAR_REMINDERS:
        reminders = [];
<<<<<<< HEAD
        cookies.set('reminders', reminders, { path: '/', expires: new Date(Date.now()+31592000000) });
        // bake_cookie('reminders', reminders);
=======
        bake_cookie('reminders', reminders);
>>>>>>> delete_reminder
        return reminders;
    default:
      return state;
  }
}

export default reminders;
