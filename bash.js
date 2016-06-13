var commands = require('./commands');


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmdString = data.toString().trim();
  var cmdList = cmdString.split(/\s*\|\s*/g); // Makes list out of pipe characters

  var dataArr = cmdList[0].split(" ");

  cmdList = cmdList.slice(1);


  commands[dataArr[0]](cmdList, dataArr.slice(1), done);

});


var done = function(stdin, output) { 
  if(stdin.length === 0){
    process.stdout.write(output + '\n');
    process.stdout.write('prompt > ');
  } else {
    var newCommand = stdin.shift();

    var expression = newCommand.split(" ");

    commands[expression[0]](stdin, output, done,expression[1]);
  }
}



