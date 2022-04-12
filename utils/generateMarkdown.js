
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none"){
  return""
}
    else{
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none"){
    return""
  }
      else{
        return `
        [License](#license)`;
      }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {   
  if (license === "none"){
  return""
}
    else{
      return `
      ## License
      This prroject is licensed under ${license}.
      `;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}
  
## Description
  ${data.description}

## Table of Contents
[Installation](#installation)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Tests](#tests)<br>
[Contributing](#contributing)<br>
[Questions](#questions)<br>

## Installation
To run code you need to install: ${data.installation}

## Usage
The useage of this is ${data.usage}

## License
Project License ${data.license} 
${renderLicenseLink(data.license)}

## Contributing
The contributors to this project are: ${data.contribution}

## Tests
To run tests, you need to run: ${data.test}

## Questions
If you have questions contact ${data.username} at ${data.email}.
`;
}

module.exports = generateMarkdown;
