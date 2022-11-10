// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "mit") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if(license === "lgpl-3.0") {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if(license === "mpl-2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if(license === "agpl-3.0") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if(license === "apache-2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if(license === "gpl-3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "unlicense"){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "mit") {
    return `https://spdx.org/licenses/MIT.html`;
  } 
  
  else if(license === "lgpl-3.0") {
    return `https://www.gnu.org/licenses/lgpl-3.0-standalone.html`;
  } 
  
  else if(license === "mpl-2.0") {
    return `https://www.mozilla.org/MPL/2.0/`;
  } 
  
  else if(license === "agpl-3.0") {
    return `https://www.gnu.org/licenses/agpl-3.0.txt`;
  } 
  
  else if(license === "apache-2.0") {
    return `https://www.apache.org/licenses/LICENSE-2.0`;
  } 
  
  else if(license === "gpl-3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0-standalone.html`;
  } 
  
  else if (license === "unlicense"){
    return `https://unlicense.org/`;
  } 
  
  else {
    return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license) {
    return `
    ${data.license} License
    ${renderLicenseLink(data.license)}
    `
  } else {
    return '';
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}    ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Tests](#Tests)
  * [Contributing](#Contributing)
  * [License](#License)
  * [Questions](#Questions)

  
  ## Installation 

  ${data.installation}

  ## Usage 

  ${data.usage}

  ## Tests 

  ${data.tests}

  ## Contributing 

  ${data.contributing}

  ## License 
  ${renderLicenseSection(data)}

  ## Questions 

  If you have any questions, please feel free to contact me at:        
  Github: [https://github.com/${data.username}](https://github.com/${data.username})         
  Email address: ${data.email}        

`;
}

module.exports = generateMarkdown;
