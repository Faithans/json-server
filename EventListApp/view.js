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
      <input type="button" id="edit_button${ele.id}" value="Edit" class="edit">
      <input type="button" id="save_button${ele.id}" value="Save" class="save">
      <input type="button" id="delete_button${ele.id}" value="Delete" class="delete">
    </td>
  </tr>
    `
  })

//   tmp += `
//   <tr id="row_add">
//   <td id="event_row_add">
//     <input type='text' id="event_row_add_input" value='' >
//   </td>
//   <td id="startdate_row_add">
//     <input type='text' id="startdate_row_add_input" value='' >
//   </td>
//   <td id="enddate_row_add">
//     <input type='text' id="enddate_row_add_input" value='' >
//   </td>
// </tr>
//   `

  return tmp;
}


const createNewRow = () => {
  let tmp = '';
  tmp += `

  <td id="event_row_add">
    <input type='text' id="event_row_add_input"  >
  </td>
  <td id="startdate_row_add">
    <input type='text' id="startdate_row_add_input"  >
  </td>
  <td id="enddate_row_add">
    <input type='text' id="enddate_row_add_input"  >
  </td>
  <td>
  <input type="button" id="save_button_add" value="Save" class="save_add">
</td>
  `
  return tmp
}
export {
  render,
  createTmp,
  createNewRow
}