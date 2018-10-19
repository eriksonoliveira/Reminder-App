import React, { Component } from "react";

class Clear extends Component {
  render() {
    return (
      <div className="clear-button col-lg-6 p-0">
        <div
          className="btn mt-2 reminder-clear"
          onClick={() => this.props.clearReminders()}
        >
          Clear All Reminders <span class="glyphicon glyphicon-trash" />
        </div>
      </div>
    );
  }
}

export default Clear;
