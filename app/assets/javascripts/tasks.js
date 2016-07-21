// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// function ready() {
//   $('#new_task').on('ajax:success', newTask);
//
//   function newTask() {
//     $('#task').append(data);
//   }
// }

$(document).on('ready page:load', ready);

function ready() {
  $('#new_task').on('ajax:success', newTask);

  function newTask(event, data) {
    $('#tasks').append(data);
    $('#task_name').val('');
  }
}
