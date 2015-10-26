var inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "list",
    name: "theme",
    message: "What do you want to do?",
    choices: [
      {name:'user-name', value: "user name :"},
     {name:'user-key', value: "user key :"},
      new inquirer.Separator(),
      {name:'user-key-2', value: "user key -2:"},
      {name:'user-key-3', value: "user key -3:"},
    ]
  },
  {
    type: "list",
    name: "size",
    message: "What size do you need",
    choices: [ "Jumbo", "Large", "Standard", "Medium", "Small", "Micro" ],
    filter: function( val ) { return val.toLowerCase(); }
  }
], function( answers ) {
    console.log( JSON.stringify(answers, null, "  ") );
    // console.log(answers);
    inquirer.prompt([{
    type: "list",
    name: "test",
    message: "testsets",
    choices: [ "Jumbo", "Large", "Standard", "Medium", "Small", "Micro" ],
    filter: function( val ) { return val.toLowerCase(); }
  }], function (answers2) {
        console.log(answers2);
    })
  });




