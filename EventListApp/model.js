import {render, createTmp, convertDay} from './view.js';

class Event {
  constructor(eventName, startDate, endDate) {
    this.eventName = eventName;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class State {
  log = [];

  get datalog() {
    return this.log;
  }

  set datalog(newdata) {
    newdata.forEach(obj => {
      obj.startDate = obj.startDate.length > 10? convertDay(obj.startDate) : obj.startDate;
      obj.endDate = obj.endDate.length > 10? convertDay(obj.endDate) : obj.endDate;
    })
    this.log = newdata;

    const ele = document.querySelector('#table-body');
    const tmp = createTmp(this.log);
    render(ele, tmp);
  }
}

export {
  Event,
  State
}