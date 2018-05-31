//Get user input and send data back to parent component
import React, { Component } from 'react';

class Form extends Component {
  render() {
    return(
      <div className="form-inline form-row align-items-center reminder-form">

          <div className="col-auto form-group">
            <label className="sr-only" htmlFor="reminderDesc">Reminder Description</label>
            <input
              id="reminderDesc"
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.props.handleChange("text", event.target.value)}
            />
          </div>
          <div className="col-auto form-group">
            <input
              className="form-control"
              type="date"
              onChange={event => this.props.handleChange("dueDate", event.target.value)}
            />
          </div>
          <div className="col-auto form-group">
            <input
              className="form-control"
              type="time"
              onChange={event => this.props.handleChange("dueTime", event.target.value)}
            />
          </div>

        <div className="col-auto form-group">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => this.props.addReminder()}
          >
            Add Remainder
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
