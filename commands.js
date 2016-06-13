var fs = require('fs');
var request = require ('request');




function ls(arg, done){
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    var output = '';
    files.forEach(function(file) {
       output += file.toString() + "\n";
    })
    done(output);
  });


}

function echo (arr, done) {
  var output = '';
  arr.forEach(function (e){
    output += e.toString() + " ";
  });

  done(output);
}

function pwd(arg, done){
  done(process.cwd());
}

function cat (arg, done) {
  fs.readFile(arg[0], function (err, contents) {
    if(err) throw new TypeError("This file doesn't exist");

    done(contents.toString());
  });

}

function head (arg, done) {
  fs.readFile(arg[0], function (err, contents) {
    if(err) throw new TypeError("This file doesn't exist");

    var contArr = contents.toString().split("\n").slice(0,10);

    var output = '';

    contArr.forEach(function (e) {
      output += e + '\n';
    });

    done(output);

  });
}

function tail (arg, done) {
  fs.readFile(arg[0], function (err, contents) {
    if(err) throw new TypeError("This file doesn't exist");

    var contArr = contents.toString().split("\n");

    contArr = contArr.slice(contArr.length - 10);

    var output = '';

    contArr.forEach(function (e) {
      output += e + '\n';
    });

    done(output);
  });
}

function curl (arg, done) {
  var url = arg[0];
  if(!url.match(/http:\/\//)) url = 'http://' + url;
  request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    done(body); // Show the HTML
  }

});

}

function getDate(arg, done){
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
        break;
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

  done(finalDate);

}

exports.pwd = pwd;
exports.date = getDate;
exports.ls = ls;
exports.echo = echo;
exports.cat = cat;
exports.head = head;
exports.tail = tail;
exports.curl = curl;
