$(document).ready(function () {
var timeBlockEl = document.querySelector('.container');
var now = moment();

$('.saveBtn').on('click', function () {
  var txVal = $(this).siblings('.description').val();
  var hourID = $(this).parent().attr('id');

  localStorage.setItem(hourID, txVal);
})

function changeColor() {
  var currentTime = now.hours();

  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);

    if (timeId < currentTime) {
      $(this).addClass('past');
    }
    else if (timeId === currentTime) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    }
    else {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    }
  });
}
changeColor();

  $('#hour-9 .description').val(localStorage.getItem('hour9'));
  $('#hour-10 .description').val(localStorage.getItem('hour10'));
  $('#hour-11 .description').val(localStorage.getItem('hour11'));
  $('#hour-12 .description').val(localStorage.getItem('hour12'));
  $('#hour-13 .description').val(localStorage.getItem('hour13'));
  $('#hour-14 .description').val(localStorage.getItem('hour14'));
  $('#hour-15 .description').val(localStorage.getItem('hour15'));
  $('#hour-16 .description').val(localStorage.getItem('hour16'));
  $('#hour-17 .description').val(localStorage.getItem('hour17'));

  $('.time-block').each(function() {
    var hourID = $(this).attr('id');
    var userNotes = localStorage.getItem(hourID)
    if (userNotes !== null) {
      $(this).find('.description').val(userNotes)
    }
  })

$('#currentDay').text(now.format('LLLL'));
  })