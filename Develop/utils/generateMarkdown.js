// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-red.svg)](${renderLicenseLink(license)})`
  }
}

// License links
function renderLicenseLink(license) {
  if (license === 'BSD Zero Clause License') { return 'https://choosealicense.com/licenses/0bsd' }
  if (license === 'Academic Free License v3.0') { return 'https://choosealicense.com/licenses/afl-3.0' }
  if (license === 'GNU Affero General Public License v3.0') { return 'https://choosealicense.com/licenses/agpl-3.0' }
  if (license === 'Apache License 2.0') { return 'https://choosealicense.com/licenses/apache-2.0' }
  if (license === 'Artistic License 2.0') { return 'https://choosealicense.com/licenses/artistic-2.0' }
  if (license === 'BSD 2-Clause "Simplified" License') { return 'https://choosealicense.com/licenses/bsd-2-clause' }
  if (license === 'BSD 3-Clause Clear License') { return 'https://choosealicense.com/licenses/bsd-3-clause-clear' }
  if (license === 'BSD 3-Clause "New" or "Revised" License') { return 'https://choosealicense.com/licenses/bsd-3-clause' }
  if (license === 'BSD 4-Clause "Original" or "Old" License') { return 'https://choosealicense.com/licenses/bsd-4-clause' }
  if (license === 'Boost Software License 1.0') { return 'https://choosealicense.com/licenses/bsl-1.0' }
  if (license === 'Creative Commons Attribution 4.0 International') { return 'https://choosealicense.com/licenses/cc-by-4.0' }
  if (license === 'Creative Commons Attribution Share Alike 4.0 International') { return 'https://choosealicense.com/licenses/cc-by-sa-4.0' }
  if (license === 'Creative Commons Zero v1.0 Universal') { return 'https://choosealicense.com/licenses/cc0-1.0' }
  if (license === 'CeCILL Free Software License Agreement v2.1') { return 'https://choosealicense.com/licenses/cecill-2.1' }
  if (license === 'CERN Open Hardware Licence Version 2 - Permissive') { return 'https://choosealicense.com/licenses/cern-ohl-p-2.0' }
  if (license === 'CERN Open Hardware Licence Version 2 - Strongly Reciprocal') { return 'https://choosealicense.com/licenses/cern-ohl-s-2.0' }
  if (license === 'CERN Open Hardware Licence Version 2 - Weakly Reciprocal') { return 'https://choosealicense.com/licenses/cern-ohl-w-2.0' }
  if (license === 'Educational Community License v2.0') { return 'https://choosealicense.com/licenses/ecl-2.0' }
  if (license === 'Eclipse Public License 1.0') { return 'https://choosealicense.com/licenses/epl-1.0' }
  if (license === 'Eclipse Public License 2.0') { return 'https://choosealicense.com/licenses/epl-2.0' }
  if (license === 'European Union Public License 1.1') { return 'https://choosealicense.com/licenses/eupl-1.1' }
  if (license === 'European Union Public License 1.2') { return 'https://choosealicense.com/licenses/eupl-1.2' }
  if (license === 'GNU Free Documentation License v1.3') { return 'https://choosealicense.com/licenses/gfdl-1.3' }
  if (license === 'GNU General Public License v2.0') { return 'https://choosealicense.com/licenses/gpl-2.0' }
  if (license === 'GNU General Public License v3.0') { return 'https://choosealicense.com/licenses/gpl-3.0' }
  if (license === 'ISC License') { return 'https://choosealicense.com/licenses/isc' }
  if (license === 'GNU Lesser General Public License v2.1') { return 'https://choosealicense.com/licenses/lgpl-2.1' }
  if (license === 'GNU Lesser General Public License v3.0') { return 'https://choosealicense.com/licenses/lgpl-3.0' }
  if (license === 'LaTeX Project Public License v1.3c') { return 'https://choosealicense.com/licenses/lppl-1.3c' }
  if (license === 'MIT No Attribution') { return 'https://choosealicense.com/licenses/mit-0' }
  if (license === 'MIT License') { return 'https://choosealicense.com/licenses/mit' }
  if (license === 'Mozilla Public License 2.0') { return 'https://choosealicense.com/licenses/mpl-2.0' }
  if (license === 'Microsoft Public License') { return 'https://choosealicense.com/licenses/ms-pl' }
  if (license === 'Microsoft Reciprocal License') { return 'https://choosealicense.com/licenses/ms-rl' }
  if (license === 'Mulan Permissive Software License, Version 2') { return 'https://choosealicense.com/licenses/mulanpsl-2.0' }
  if (license === 'University of Illinois/NCSA Open Source License') { return 'https://choosealicense.com/licenses/ncsa' }
  if (license === 'Open Data Commons Open Database License v1.0') { return 'https://choosealicense.com/licenses/odbl-1.0' }
  if (license === 'SIL Open Font License 1.1') { return 'https://choosealicense.com/licenses/ofl-1.1' }
  if (license === 'Open Software License 3.0') { return 'https://choosealicense.com/licenses/osl-3.0' }
  if (license === 'PostgreSQL License') { return 'https://choosealicense.com/licenses/postgresql' }
  if (license === 'The Unlicense') { return 'https://choosealicense.com/licenses/unlicense' }
  if (license === 'Universal Permissive License v1.0') { return 'https://choosealicense.com/licenses/upl-1.0' }
  if (license === 'Vim License') { return 'https://choosealicense.com/licenses/vim' }
  if (license === 'Do What The F*ck You Want To Public License') { return 'https://choosealicense.com/licenses/wtfpl' }
  if (license === 'zlib License') { return 'https://choosealicense.com/licenses/zlib' }
}

// Text to pupulate below License header
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `* Licensed under [${license}](${renderLicenseLink(license)})`
  }
}

// Populates and formats README.md file
function generateMarkdown(data) {
  return `# ${data.project_title}

  ${renderLicenseBadge(data.license)}

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
  ${renderLicenseSection(data.license)}
  

  ## Contact Me
  * Find me on Github: [${data.github}](http://github.com/${data.github})
  * For additional feedback, email me at [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
