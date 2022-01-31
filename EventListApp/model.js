import {render, createTmp} from './view.js';

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