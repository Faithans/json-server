import { State, Event } from './model.js';
import { render, createTmp, createNewRow } from './view.js';
import { getEvents, addEvents, deleteEvents, updateEvents } from './api.js';

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
  ele.addEventListener("click", (e) => {
    if (e.target.getAttribute('class') === 'delete') {
      state.datalog = state.datalog.filter((event) => {
        return +event.id !== +e.target.id.split('')[(e.target.id.length) - 1];
      });
      deleteEvents(e.target.id.split('')[(e.target.id.length) - 1]);
    }
  })
}

const addEditFunc = () => {
  const ele = document.querySelector('#table-body');

  ele.addEventListener("click", (e) => {
    if (e.target.getAttribute('class') === 'edit') {
      const parent = e.target.parentElement.parentElement;

      const id = parent.id.split('')[parent.id.length - 1];
      console.log(id);
      const currentEventTd = document.querySelector(`#event_row${id}`);
      const currentStartTd = document.querySelector(`#startdate_row${id}`);
      const currentEndTd = document.querySelector(`#enddate_row${id}`);


      currentEventTd.innerHTML = `<input type='text' id='event_text${id}'>`;
      currentStartTd.innerHTML = `<input type='text' id='startdate_text${id}'>`;
      currentEndTd.innerHTML = `<input type='text' id='enddate_text${id}'>`;
      e.target.style.display = 'none';
      document.querySelector(`#save_button${id}`).style.display = 'block';


      const saveBtn = document.querySelector(`#save_button${id}`);
      saveBtn.addEventListener("click", (e) => {
        const newEvent = {
          "eventName": document.querySelector(`#event_text${id}`).value,
          "startDate": document.querySelector(`#startdate_text${id}`).value,
          "endDate": document.querySelector(`#enddate_text${id}`).value,
          "id": state.datalog.length + 1,
        }
        updateEvents(id, newEvent).then(newE => {
          state.datalog = [newE, ...state.datalog];
        })
      })
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
  addEditFunc();
  addDeleteFunc();
}

export { bootstrap }