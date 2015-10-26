// function main_loop(){
//     var prompt = require('prompt');
//     console.log("OPTIONS");
//     console.log("=========");
//     console.log("1. Use a potion");
//     console.log("2. Go to the next room");
//     console.log("3. Exclaim ' Die you wizard!!!'");
//     console.log("4. Exit game");
//     var option;
//     prompt.get(['option'], function(err, result){
//       option = result.option;
//       console.log("option is: " + option);
//     });
// }
// main_loop();
//
  // var prompt = require('prompt');

  // //
  // // Start the prompt
  // //
  // prompt.start();

  // //
  // // Get two properties from the user: username and email
  // //
  // prompt.get(['username', 'email'], function (err, result) {
  //   //
  //   // Log the results.
  //   //
  //   console.log('Command-line input received:');
  //   console.log('  username: ' + result.username);
  //   console.log('  email: ' + result.email);
  // });


  //prompt-override.js

  // var prompt = require('prompt'),
  //     optimist = require('optimist')

  // //
  // // set the overrides
  // //
  // prompt.override = optimist.argv

  // //
  // // Start the prompt
  // //
  // prompt.start();

  // //
  // // Get two properties from the user: username and email
  // //
  // prompt.get(['username', 'email'], function (err, result) {
  //   //
  //   // Log the results.
  //   //
  //   console.log('Command-line input received:');
  //   console.log('  username: ' + result.username);
  //   console.log('  email: ' + result.email);
  // })

  //: node prompt-override.js --username USER --email EMAIL

/**
 * 用 实现promise的q模块实现异步的包装
 *
 *
 * @type {[type]}
 */
var Q = require('q');
var prompt = require('prompt');
function syncPrompt(callback) {
  var deferred = Q.defer();
    prompt.get([{
      name: 'name',
      description: 'Your name',
      type: 'string',
      required: true
    }, {
      name: 'surname',
      description: 'Your surname',
      type: 'string',
      required: true,
      message: 'Please dont use the demo credentials',
      conform: function(surname) {
        var name = prompt.history('name').value;
        return (name !== 'John' || surname !== 'Smith');
      }
    }], function(err, results) {
      if (err) {
        deferred.reject(err);
      }
      else {
        deferred.resolve(results);
      }
    });
    return deferred.promise.nodeify(callback);
}

syncPrompt().done(function (data) {
  console.log(data);
});

