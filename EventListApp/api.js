const baseurl = "http://localhost:3000";
const path = "events";

const getEvents = () =>
  fetch([baseurl, path].join("/")).then((response) => response.json());


const addEvent = (events) =>
  fetch([baseurl, path].join("/"), {
    method: "POST",
    body: JSON.stringify(events),
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => response.json());

const deleteEvent = (id) =>
  fetch([baseurl, path, id].join("/"), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => response.json())

const updateEvent = (id, event) => {
  fetch([baseurl, path, id].join("/"), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(event),
  }).then((response) => response.json())
  .then((json) => console.log(json));
}


export {
  getEvents,
  addEvent,
  deleteEvent,
  updateEvent
}