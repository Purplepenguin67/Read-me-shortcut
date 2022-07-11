var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');

// questions to ask the user //
let questions = [
    {
        type: "input",
        message: "What is your repository title?",
        name: "title"
    },{
        type: "input",
        message: "Please give your logo information.",
        name: "logo"
    },{
        type: "input",
        message: "GitHub user name?",
        name: "userName"
    },{
        type: "input",
        message: "Insert GitHub profile link.",
        name: "GitHub"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },{
        type: "input",
        message: "Describe the repository.",
        name: "description"

    },{
        type: "input",
        message: "State if others can contribute.",
        name: "contribute"
    },{
        type: "input",
        message: "Please state any test(s) required (1/3).",
        name: "test"
    },{
        type: "input",
        message: "Please state any test(s) required (2/3).",
        name: "test2"
    },{
        type: "input",
        message: "Please state any test(s) required (3/3).",
        name: "test3",
    },{
        type: "input",
        message: "What are the project acomplishments.",
        name: "accomplish"
    },{
        type: "input",
        message: "Please state provide a screenshot.",
        name: "scriptjs" 
    },{
        type: "input",
        message: "What is the goal of this project?",
        name: "endgoal"
    }
];


// Function to write to my ReadMe.md file. //
inquirer.prompt(questions).then(function(response) {
   console.log(response);
   
    var content = fileGenerator(response);
    console.log(content);
     fs.writeFile("./ReadMe.md", content, function(err){
         if (err) throw err
         console.log("success");
     });
} ); 