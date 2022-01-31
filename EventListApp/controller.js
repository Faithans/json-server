import { State, Event } from './model.js';
import { render, createTmp } from './view.js';
import { getEvents, addEvents, deleteEvents, updateEvent } from './api.js';

const state = new State();

const addEventsfunc = () =>{
  const addRow = document.querySelector('#row_add');
  const addBtn = document.querySelector('.addBtn');
  addBtn.addEventListener("click", (e) => {
    const newEvent =     {
      "eventName": document.querySelector('#event_row_add_input').value,
      "startDate": document.querySelector('#startdate_row_add_input').value,
      "endDate": document.querySelector('#enddate_row_add_input').value,
      "id": state.datalog.length + 1,
    }
    addEvents(newEvent).then(newE => {
      state.datalog = [newE, ...state.datalog];
    })
  })

}

const init = () => {
  getEvents().then((data) => {
    state.datalog = data;
  })
}

const bootstrap = () => {
  init();
  addEventsfunc();
  // addEditFunc();
  // addSaveFunc();
  // addDeleteFunc();
}

export { bootstrap }