// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const GenerateMarkdown = require("./lib/ReadmeGen");

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "Enter your project title.",
    type: "input",
    name: "title",
    validate: (value) => (value ? true : "Please enter the project title."),
  },

  {
    message: "Enter the project description.",
    type: "input",
    name: "description",
    validate: (value) =>
      value ? true : "Please enter the project description.",
  },

  {
    message: "Enter the installation instructions.",
    type: "input",
    name: "installation",
    validate: (value) =>
      value ? true : "Please enter the installation instructions.",
  },

  {
    message: "Enter the usage information.",
    type: "input",
    name: "usage",
    validate: (value) => (value ? true : "Please enter the usage information."),
  },

  {
    message: "Enter the contribution guidelines.",
    type: "input",
    name: "contribution",
    validate: (value) =>
      value ? true : "Please enter the contribution guidelines.",
  },

  {
    message: "Enter the test instructions.",
    type: "input",
    name: "test",
    validate: (value) => (value ? true : "Please enter the test instructions."),
  },

  {
    message: "Choose a license:",
    name: "license",
    type: "list",
    choices: [
      "Apache License 2.0",
      "Creative Commons License",
      "GNU Affero General Public License v3.0",
      "MIT",
      "Mozilla Public License 2.0"
    ],
    validate: (value) => (value ? true : "Please enter a license."),
  },

  {
    message: "Enter your GitHub repo link.",
    type: "input",
    name: "repo",
    validate: (value) => (value ? true : "Please enter your GitHub repo link."),
  },

  {
    message: "Enter your GitHub user name.",
    type: "input",
    name: "username",
    validate: (value) => (value ? true : "Please enter your GitHub user name."),
  },

  {
    message: "Enter your email.",
    type: "input",
    name: "email",
    validate: (value) => (value ? true : "Please enter your email."),
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const {
      title,
      description,
      installation,
      usage,
      contribution,
      test,
      license,
      repo,
      username,
      email,
    } = answers;

    const template = `
    # ${title}
      
    - [Project Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Test](#test)
    - [License](#license)
    - [Questions](#questions)
      
    ## Description
    ${description}
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    
    ## Contribution
    ${contribution}
    
    ## Test
    ${test}
    
    ## License
    ${license}
    
    ## Questions
    If you have any questions or want to get in touch, you can reach me through the following channels:
    - GitHub: [${username}](${repo})
    - Email: ${email}`;

    const markdownContent = GenerateMarkdown.generateReadme(answers);

    createNewFile("README.md", markdownContent);
  })
  .catch((error) => {
    console.log(error);
  });

// TODO: Create a function to write README file
function createNewFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Your README has been generated!");
    }
  });
}

// TODO: Create a function to initialize app

