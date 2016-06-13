var fs = require('fs');

function ls(){
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write('prompt > ');
  });
}

function pwd(){
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
}

function getDate(){
  var date = new Date();
  var currentDay = date.getDay();

  switch (currentDay) {
    case 0:
        currentDay = "Sun";
        break;
    case 1:
        currentDay = "Mon";
        break;
    case 2:
        currentDay = "Tue";
        break;
    case 3:
        currentDay = "Wed";
        break;
    case 4:
        currentDay = "Thu";
        break;
    case 5:
        currentDay = "Fri";
        break;
    case 6:
        currentDay = "Sat";
        break
  }



  var currentMonth = date.getMonth();

  switch (currentMonth) {
    case 0:
        currentMonth = "Jan";
        break;
    case 1:
        currentMonth = "Feb";
        break;
    case 2:
        currentMonth = "Mar";
        break;
    case 3:
        currentMonth = "Apr";
        break;
    case 4:
        currentMonth = "May";
        break;
    case 5:
        currentMonth = "Jun";
        break;
    case 6:
        currentMonth = "Jul";
        break;
    case 7:
        currentMonth = "Aug";
        break;
    case 8:
        currentMonth = "Sep";
        break;

    case 9:
        currentMonth = "Oct";
        break;

    case 10:
        currentMonth = "Nov";
        break;

    case 11:
        currentMonth = "Dec";
        break;
  }





  var currentDate = date.getDate();
  var currentYear = date.getFullYear();


  var currentHour = date.getHours();
  var currentMinute = date.getMinutes();
  var currentSecond = date.getSeconds();


  var currentTime = currentHour+':'+currentMinute+':'+currentSecond;

  var finalDate = [currentDay, currentMonth, currentDate, currentYear, currentTime].join(' ');

  process.stdout.write(finalDate);

  process.stdout.write('\nprompt > ');
}

exports.pwd = pwd;
exports.date = getDate;
exports.ls = ls;
