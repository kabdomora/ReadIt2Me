// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `* Licensed under ${renderLicenseLink}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}
  ## Table of Contents
  1. [Project Description](#project-description)
  2. [Installation Instructions](#installation-instructions)
  3. [How To Use](#how-to-use)
  4. [How To Contribute](#how-to-contribute)
  6. [Testing](#testing)
  7. [License](#license)
  8. [Contact Me](#contact-me)

  ## Project Description
  * ${data.project_description}

  ## Installation Instructions
  * ${data.installation}

  ## How To Use
  * ${data.purpose}

  ## How To Contribute
  * ${data.contribute}
  
  ## Testing
  * ${data.tests}

  ## License
  ${renderLicenseSection}

  ## Contact Me
  * Find me on Github: [${data.github}](http://github.com/${data.github})
  * For additional feedback, email me at [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
