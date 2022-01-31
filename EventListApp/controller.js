import { State, Event } from './model.js';
import { render, createTmp, createNewRow } from './view.js';
import { getEvents, addEvents, deleteEvents, updateEvent } from './api.js';

const state = new State();

const addEventsfunc = () => {
  const addRow = document.querySelector('#row_add');
  const addBtn = document.querySelector('.addBtn');
  addBtn.addEventListener("click", (e) => {
    const newRow = createNewRow();
    var tr = document.createElement('tr');
    tr.innerHTML = newRow;
    document.getElementById('table-body').appendChild(tr);
    // Add save function
    const saveBtn = document.querySelector('.save_add');
    saveBtn.addEventListener("click", (e) => {
      const saveBtn = document.querySelector('.save_add');
      const newEvent = {
        "eventName": document.querySelector('#event_row_add_input').value,
        "startDate": document.querySelector('#startdate_row_add_input').value,
        "endDate": document.querySelector('#enddate_row_add_input').value,
        "id": state.datalog.length + 1,
      }
      addEvents(newEvent).then(newE => {
        state.datalog = [newE, ...state.datalog];
      })
    })

  })

}

const addDeleteFunc = () => {
  const ele = document.querySelector('#table-body');
  console.log(ele);
  ele.addEventListener("click", (e) => {
    console.log(e.target.getAttribute('class'))
    if(e.target.getAttribute('class') === 'delete') {
    state.datalog = state.datalog.filter((event) => {
      return +event.id !== +e.target.id.split('')[(e.target.id.length) - 1] ;
    });
    deleteEvents(e.target.id.split('')[(e.target.id.length) - 1]);
  }
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
  addDeleteFunc();
}

export { bootstrap }