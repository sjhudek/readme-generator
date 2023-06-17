// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    "Apache License 2.0": "[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)",
    "Creative Commons License": "[CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)",
    GNU: "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)",
    MIT: "[MIT](https://opensource.org/licenses/MIT)",
    "Mozilla Public License 2.0": "[MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/)",
  };
  return licenseLinks[license];
}

// module.exports = { renderLicenseLink };



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${license}.`;
  } else {
    return "Please choose a license for your project.";
  }
}

module.exports = {
  generateLicenseSection,
};


// module.exports = { renderLicenseSection };
module.exports = {
  renderLicenseLink,
  renderLicenseSection
};


// TODO: Create a function to generate markdown for README

const generateMarkdown = require('./generateMarkdown');

const data = {
  title: 'My Project',
  description: 'This is a sample project.',
  installation: 'npm install',
  usage: 'node index.js',
  contribution: 'Contributions are welcome.',
  test: 'npm test',
  license: 'MIT',
  repo: 'https://github.com/yourusername/my-project',
  username: 'yourusername',
  email: 'youremail@example.com'
};

const markdownContent = generateMarkdown(data);

console.log(markdownContent);


