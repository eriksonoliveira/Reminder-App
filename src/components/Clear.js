import React, { Component } from 'react';

class Clear extends Component {
  render() {
    return(
      <div
        className="btn btn-danger mt-2"
        onClick={() => this.props.clearReminders()}
      >
        Clear Reminders
      </div>
    );
  }
}

export default Clear;
