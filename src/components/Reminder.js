//Show list of reminders from the store
//Uses moment.js to convert the due date into more user friendly format
import React, { Component } from 'react';
import moment from 'moment';

class Reminder extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {
<<<<<<< HEAD
          this.props.reminders.reminders.map(reminder => {
=======
          this.props.reminders.map(reminder => {
>>>>>>> delete_reminder
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div className="text-muted"><small>{moment(new Date(`${reminder.dueDate}T${reminder.dueTime}`)).fromNow()}</small></div>
                </div>
                <div
                className="list-item delete-button"
                onClick={() => this.props.deleteReminder(reminder.id)}>
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default Reminder;
