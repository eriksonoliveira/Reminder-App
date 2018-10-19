//Get user input and send data back to parent component
import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="col-lg-6 reminder-form p-0">
        <div className="form-group">
          <label className="sr-only" htmlFor="reminderDesc">
            Reminder Description
          </label>
          <input
            id="reminderDesc"
            className="form-control m-0"
            placeholder="I have to..."
            onChange={event =>
              this.props.handleChange("text", event.target.value)
            }
          />
        </div>
        <div className="reminder-form-time">
          <input
            className="form-control m-0"
            type="date"
            onChange={event =>
              this.props.handleChange("dueDate", event.target.value)
            }
          />
          <input
            className="form-control  m-0"
            type="time"
            onChange={event =>
              this.props.handleChange("dueTime", event.target.value)
            }
          />
        </div>

        <div className="">
          <button
            type="button"
            className="btn btn-success add-reminder-btn"
            onClick={() => this.props.addReminder()}
          >
            Add Reminder
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
