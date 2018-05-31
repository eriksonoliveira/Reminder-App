import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constant';

//Action creator addReminder
export const addReminder = (text, dueDate, dueTime) => {
  //Action
  const action = {
    type: ADD_REMINDER,
    text, //short for text: text
    dueDate,
    dueTime
  }

  console.log('action in addReminder', action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting in actions', action);
  return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}

export default addReminder;
