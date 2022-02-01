const render = (element, tmp) => {
  element.innerHTML = tmp;
}

const createTmp = arr => {
  let tmp = '';
  arr.forEach((ele) => {
    tmp += `
    <tr id="row${ele.id}">
    <td id="event_row${ele.id}">
      <input type='text' id="event_row${ele.id}_input" value='${ele.eventName}' disabled=true>
    </td>
    <td id="startdate_row${ele.id}">
      <input type='text' id="startdate_row${ele.id}_input" value='${ele.startDate}' disabled=true>
    </td>
    <td id="enddate_row${ele.id}">
      <input type='text' id="enddate_row${ele.id}_input" value='${ele.endDate}' disabled=true>
    </td>

    <td>
      <button type="button" id="edit_button${ele.id}" value="Edit" class="edit">Edit</button>
      <button type="button" id="save_button${ele.id}" value="Save" class="save">Save</button>
      <button type="button" id="delete_button${ele.id}" value="Delete" class="delete">Delete</button>
    </td>
  </tr>
    `
  })

  return tmp;
}


const createNewRow = () => {
  let tmp = '';
  tmp += `

  <td id="event_row_add">
    <input type='text' id="event_row_add_input"  >
  </td>
  <td id="startdate_row_add">
    <input type='date' id="startdate_row_add_input"  >
  </td>
  <td id="enddate_row_add">
    <input type='date' id="enddate_row_add_input"  >
  </td>
  <td>
  <button type="button" id="save_button_add" value="Save" class="save_add">Save</button>
</td>
  `
  return tmp
}


const convertDay = (code) => {
  let newdate;

  var dateObj = new Date(+code);
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  month = month.length < 2? '0'+month : month;
  day = day.length < 2? '0'+day : day;

  return newdate = year + "-" + month + "-" + day;
}
export {
  render,
  createTmp,
  createNewRow,
  convertDay
}