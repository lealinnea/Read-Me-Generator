// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
    type:"input",
    message:"What is the title of your project?",
    name: "title"
},
{
    type:"input",
    message:"Discription of your project.",
    name: "description"
},
{
    type:"input",
    message:"Discription of the installation instructions.",
    name: "installation"
},
{
    type:"input",
    message:"Describe the usage of this project.",
    name: "usage"
},
{
    type:"input",
    message:"Who contrubuted?",
    name: "contribution"
},
{
    type:"input",
    message:"What test should be run?",
    name: "testing"
},
{
    type: 'checkbox',
            message: 'Please provide the license you used for this project',
            name: 'license',
            choices: [
                "MIT", 
                "Apache", 
                "Mozilla Public License", 
                "none"
            ]
},

{    
    type:"input",
    message:"Please enter GitHub username",
    name: "username"
},
{
    type:"input",
    message:"Please enter email address",
    name: "email"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data){
fs.writeFile(fileName, data, function(err) {
    if (err){
        return console.log(err);
    }
    else{
        console.log("No Error");
    }})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README-GENORATOR", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
