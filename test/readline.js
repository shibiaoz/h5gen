
// var readline = require(‘readline’);


// var completer = function (userInput) {
//     var completions = '.help .error .exit .quit .q'.split(' ')
//   var hits = completions.filter(function(c) {
//     if (c.indexOf(userInput) == 0) {
//       // console.log('bang! ' + c);
//       return c;
//     }
//   });
//       return [hits && hits.length ? hits : completions, userInput];
// }
// var rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
//     completer: completer
// });

var params = [];
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    // completer: completer
});
var prefix = 'tpl type> ';
rl.on('line', function (cmd) {
  console.log(chalk.red('==> ') + cmd);
  params.push(cmd);
  if (params.length < 2) {
    rl.setPrompt("second>", "second".length);
    rl.prompt();
  }
  else {
    console.log(chalk.green(params));
    rl.close();
  }
  //rl.close();
}).on('close', function () {
    console.log(chalk.red("see you "));
});
rl.setPrompt(prefix, prefix.length);
rl.prompt();

// rl.question("give me your page id?\n",function(answer){
//     console.log(answer);
//     //rl.close();
// });

