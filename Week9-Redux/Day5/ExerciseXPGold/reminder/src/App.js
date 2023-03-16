import './App.css';
import { connect } from 'react-redux';
import { addReminder, delReminder } from './actions/actions';
import { moment} from 'moment';

function App(props) {
  console.log(props.reminders);
  return (
    <div className="App">
      <h1>Reminder App</h1>
      <form onSubmit={(e) => handleSubmit(e,props)}>
        <input id="reminderInput" placeholder='I have to...'/>
        <input id="timeInput" type="datetime-local"/>
        <button>Add Reminder</button><br/>
      </form>
      {
        (props.reminders.length > 0) ? 
          props.reminders.map( (reminder,index) => (
            <div key={index}>
              <div>{reminder.text}</div>
              <div>{reminder.time}</div>
              <button onClick={() => props.delReminder(index)}>X</button>
            </div>

          )) : 
          <h1>no reminders yet</h1>
      }
    </div>
  );
}

const handleSubmit = (e,props) => {
  e.preventDefault();
  const text = e.target.reminderInput.value
  e.target.reminderInput.value = '';
  props.addReminder(text,e.target.timeInput.value);
  
}

const mapStateToProps = (state) => {
  return {
    reminders : state.reminders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReminder : (text,time) => dispatch(addReminder(text,time)),
    delReminder : (id) => dispatch(delReminder(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
