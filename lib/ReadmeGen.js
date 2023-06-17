class GenerateMarkdown {
  static renderLicenseBadge(license) {
    const badges = {
      "Apache License 2.0":
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]",
      "Creative Commons License":
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]",
      GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
      MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "Mozilla Public License 2.0":
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]",
    };
    return badges[license];
  }

  static renderLicenseLink(license) {
    const licenseLinks = {
      "Apache License 2.0":
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]",
      "Creative Commons License":
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]",
      GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
      MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "Mozilla Public License 2.0":
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]",
    };
    return licenseLinks[license];
  }

  static renderLicenseSection(license) {
    if (license) {
      return `Licensed under the ${this.renderLicenseLink(license)} license.`;
    } else {
      return "Please choose a license.";
    }
  }

  static generateReadme(answers) {
    return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)

## Project Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Test
${answers.test}

## License
${this.renderLicenseSection(answers.license)}

## Questions
GitHub: ${answers.repo}
GitHub User Name: ${answers.username}
Email: ${answers.email}
`;
  }
}

module.exports = GenerateMarkdown;
