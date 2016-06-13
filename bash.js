var commands = require('./commands');


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var dataArr = data.toString().trim().split(" "); // remove the newline

  commands[dataArr[0]](dataArr.slice(1));

});




