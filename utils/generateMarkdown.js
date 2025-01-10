// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    } else if (license === 'APACHE 2.0') {
        return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    } else if (license === 'GPL 3.0') {
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    } else if (license === 'BSD 3') {
        return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.choices)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.dependencies}

## Usage
${data.repo}

## License
${data.choices}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please contact me at ${data.email}.
`;
}

export default generateMarkdown;
