import { State, Event } from './model.js';
import { render, createTmp } from './view.js';
import { getEvents, addEvents, deleteEvents, updateEvent } from './api.js';

const state = new State();

const addEditFunc = () => {
  const allEditBtn = document.querySelectorAll('.edit');
  allEditBtn.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const parent = e.target.parentElement.parentElement;
      const id = parent.id.split('')[parent.id.length - 1];
      const currentBrandTd = document.querySelector(`#brand_row${id}`);
      const currentModelTd = document.querySelector(`#model_row${id}`);
      const currentYearTd = document.querySelector(`#year_row${id}`);
      const currentPriceTd = document.querySelector(`#price_row${id}`);

      currentBrandTd.innerHTML = `<input type='text' id='brand_text${id}'>`;
      currentModelTd.innerHTML = `<input type='text' id='model_text${id}'>`;
      currentYearTd.innerHTML = `<input type='text' id='year_text${id}'>`;
      currentPriceTd.innerHTML = `<input type='text' id='price_text${id}'>`;
      e.target.style.display = 'none';
      document.querySelector(`#save_button${id}`).style.display = 'block';

    })
  })
}

const addSaveFunc = () => {
  const allSaveBtn = document.querySelectorAll('.save');
  allSaveBtn.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const parent = e.target.parentElement.parentElement;
      const id = parent.id.split('')[parent.id.length - 1];
      const currentBrandTd = document.querySelector(`#brand_row${id}`);
      const currentModelTd = document.querySelector(`#model_row${id}`);
      const currentYearTd = document.querySelector(`#year_row${id}`);
      const currentPriceTd = document.querySelector(`#price_row${id}`);

      currentBrandTd.innerHTML = `<td id="brand_row${id}">${document.querySelector(`#brand_text${id}`).value}</td>`;
      currentModelTd.innerHTML = `<td id="model_row${id}">${document.querySelector(`#model_text${id}`).value}</td>`;
      currentYearTd.innerHTML = `<td id="Year_row${id}">${document.querySelector(`#year_text${id}`).value}</td>`;
      currentPriceTd.innerHTML = `<td id="Price_row${id}">${document.querySelector(`#price_text${id}`).value}</td>`;

      e.target.style.display = 'none';
      document.querySelector(`#edit_button${id}`).style.display = 'block';
    })
  })
}

const addDeleteFunc = () => {
  const allDeleteBtn = document.querySelectorAll('.delete');
  allDeleteBtn.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const parent = e.target.parentElement.parentElement;
      parent.outerHTML="";
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
  // addEditFunc();
  // addSaveFunc();
  // addDeleteFunc();
}

export { bootstrap }