import { State, Event } from './model.js';
import { render, createAllEventListTmp, createNewRowTmp } from './view.js';
import { getEvents, addEvent, deleteEvent, updateEvent } from './api.js';

const state = new State();

const addEventsfunc = () => {
  const addBtn = document.querySelector('.addBtn');
  addBtn.addEventListener("click", (e) => {
    const newRow = createNewRowTmp();
    let tr = document.createElement('tr');
    tr.innerHTML = newRow;
    document.getElementById('table-body').appendChild(tr);
    // Add save function
    const saveBtn = document.querySelector('.save_add');
    saveBtn.addEventListener("click", (e) => {

      const newEvent = new Event(
        document.querySelector('#event_row_add_input').value,
        document.querySelector('#startdate_row_add_input').value,
        document.querySelector('#enddate_row_add_input').value
      )
      addEvent(newEvent)
      .then(newE => {
        console.log('task', newE);
        state.eventList = [...state.eventList, newE ];
      })
    })

  })

}

const addDeleteFunc = () => {
  const ele = document.querySelector('#table-body');
  ele.addEventListener("click", (e) => {
    if (e.target.getAttribute('class') === 'delete') {
      state.eventList = state.eventList.filter((event) => {
        return +event.id !== +e.target.id.split('')[(e.target.id.length) - 1];
      });
      deleteEvent(e.target.id.split('')[(e.target.id.length) - 1]);
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
      currentStartTd.innerHTML = `<input type='date' id='startdate_text${id}'>`;
      currentEndTd.innerHTML = `<input type='date' id='enddate_text${id}'>`;
      e.target.style.display = 'none';
      document.querySelector(`#save_button${id}`).style.display = 'block';


      const saveBtn = document.querySelector(`#save_button${id}`);
      saveBtn.addEventListener("click", (e) => {

        const newEvent = new Event(
          document.querySelector(`#event_text${id}`).value,
          document.querySelector(`#startdate_text${id}`).value,
          document.querySelector(`#enddate_text${id}`).value
        )
        updateEvent(id, newEvent).then(newE => {
          state.eventList = [...state.eventList, newE];
        })
      })
    }
  })
}



const init = () => {
  getEvents().then((data) => {
    state.eventList = data;
  })
}

const bootstrap = () => {
  init();
  addEventsfunc();
  addEditFunc();
  addDeleteFunc();
}

export { bootstrap }