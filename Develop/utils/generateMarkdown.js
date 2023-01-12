// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}
      #### Table of Contents
      1. [Project Description](#project-description)
      2. [Installation Instructions](#installation-instructions)
      3. [How To Use](#how-to-use)
      4. [How To Contribute](#how-to-contribute)
      6. [Testing](#testing)
      7. [License](#license)
      8. [Contact Me](#contact-me)

      ## Project Description
      * ${answers.project_description}

      ## Installation Instructions
      * ${answers.installation}

      ## How To Use
      * ${answers.purpose}

      ## How To Contribute
      * ${answers.contribute}
      
      ## Testing
      * ${answers.tests}

      ## License
      * licensed under the ${answers.license}

      ## Contact Me
      * Find me on Github: [${answers.github}](http://github.com/${answers.github})
      * For additional feedback, email me at [${answers.email}](mailto:${answers.email})
`;
}

module.exports = generateMarkdown;
