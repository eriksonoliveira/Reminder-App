import React, { Component } from 'react';
import Reminder from './Reminder';
import Form from './Form';
import Clear from './Clear';
import background from '../images/background.jpeg';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      dueDate: '',
      dueTime: ''
    }
  }

  addReminder = () => {
    this.props.addReminder(this.state.text, this.state.dueDate, this.state.dueTime);
  }

  deleteReminder = (id) => {
    this.props.deleteReminder(id);
  }

  clearReminders = () => {
    this.props.clearReminders();
  }

  handleChange = (type, data) => {
    //set State when user types task or time
    this.setState({
      [type]: data
    });
  }


  render() {
    const backgroundImage = {
      backgroundImage: `url(${background})`
    };

    const { reminders } = this.props;
    return(
      <div
        className="App"
        style={backgroundImage}
        >
        <div className="content-wrap d-flex flex-column align-items-center container">
          <div className="title mb-5">
            Reminde Me
          </div>

          <Form
            text={this.state.text}
            dueDate={this.state.dueDate}
            handleChange={this.handleChange}
            addReminder={this.addReminder}
          />

          <Reminder
            reminders={reminders}
            deleteReminder={this.deleteReminder}
          />

          <Clear
            clearReminders={this.clearReminders}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App);
//{addReminder, deleteReminder} replaces the declaration of mapDispatchToProps
