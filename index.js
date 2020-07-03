const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")


const questions = [
    "Title",
    "Version",
    'Description',
    'Table of Contents',
    'Installation',
    'Usage',
    'License',
    'Contributing',
    'Tests',
    'Questions',
    "Github Profile Image URL",
    "User GitHub Email"

];

function writeToFile(fileName, data) {
    fs.promises.writeFile(fileName, data).then(() => console.log("successfully written read me"))

}

function init() {
    inquirer.prompt(questions.map((question) => {
        return {
            type: "input",
            // / /g = the rejex regular expression
            name: question.replace(/ /g, '_').toLowerCase(),
            message: question,
        }


    })).then((answers) => {
        console.log(answers)
        markdown = generateMarkdown(answers)
        return writeToFile("README.md", markdown)
    })
}

init();
