// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const process = require('process');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_title',
        question: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'project_description',
        question: 'Please provide a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        question: 'Please provide necessary installation instructions.'
    },
    {
        type: 'input',
        name: 'purpose',
        question: 'What problem does this resource solve? How should it be used?'
    },
    {
        type: 'input',
        name: 'contribute',
        question: 'If others can contribute to this project, how should they do so?'
    },
    {
        type: 'input',
        name: 'tests',
        question: 'Are any tests available?'
    },
    {
        type: 'list',
        name: 'licence',
        choices: [
            '[BSD Zero Clause License]',
            '[Academic Free License v3.0]',
            '[GNU Affero General Public License v3.0]',
            '[Apache License 2.0]',
            '[Artistic License 2.0]',
            '[BSD 2-Clause "Simplified" License]',
            '[BSD 3-Clause Clear License]',
            '[BSD 3-Clause "New" or "Revised" License]',
            '[BSD 4-Clause "Original" or "Old" License]',
            '[Boost Software License 1.0]',
            '[Creative Commons Attribution 4.0 International]',
            '[Creative Commons Attribution Share Alike 4.0 International]',
            '[Creative Commons Zero v1.0 Universal]',
            '[CeCILL Free Software License Agreement v2.1]',
            '[CERN Open Hardware Licence Version 2 - Permissive]',
            '[CERN Open Hardware Licence Version 2 - Strongly Reciprocal]',
            '[CERN Open Hardware Licence Version 2 - Weakly Reciprocal]',
            '[Educational Community License v2.0]',
            '[Eclipse Public License 1.0]',
            '[Eclipse Public License 2.0]',
            '[European Union Public License 1.1]',
            '[European Union Public License 1.2]',
            '[GNU Free Documentation License v1.3]',
            '[GNU General Public License v2.0]',
            '[GNU General Public License v3.0]',
            '[ISC License]',
            '[GNU Lesser General Public License v2.1]',
            '[GNU Lesser General Public License v3.0]',
            '[LaTeX Project Public License v1.3c]',
            '[MIT No Attribution]',
            '[MIT License]',
            '[Mozilla Public License 2.0]',
            '[Microsoft Public License]',
            '[Microsoft Reciprocal License]',
            '[Mulan Permissive Software License, Version 2]',
            '[University of Illinois/NCSA Open Source License]',
            '[Open Data Commons Open Database License v1.0]',
            '[SIL Open Font License 1.1]',
            '[Open Software License 3.0]',
            '[PostgreSQL License]',
            '[The Unlicense]',
            '[Universal Permissive License v1.0]',
            '[Vim License]',
            '[Do What The F*ck You Want To Public License]',
            '[zlib License]'
        ],
        question: 'What license do you use, if any?'
    },
    {
        type: 'input',
        name: 'github',
        question: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        question: 'If users should email you with questions, provide your email.'
    },
]

// Function to create README file and save to same folder structure location
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to pass responses through to generateMarkdown app
function init() {
    inquirer.prompt(questions)
    .then(userResponses => {
        writeToFile('README.md', generateMarkdown({...userResponses}), (err) => err ?
        console.log(err): console.log('Your ReadMe File has been created!'));
    });
}

// Function call to initialize app
init();
