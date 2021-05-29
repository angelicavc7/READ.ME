// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![${license}](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)`;

  } else if (license === 'Apache 2.0') {
    return `[![${license}](https://img.shields.io/badge/license-Apache%202.0-red)](https://opensource.org/licenses/Apache-2.0)`;

  } else if (license === 'GPL 3.0') {
    return `[![${license}](https://img.shields.io/badge/license-GPL%203.0-blue)](https://opensource.org/licenses/GPL-3.0)`;

  } else {
    return ""; // If there is no license, return an empty string
  }  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return `[${license}](https://opensource.org/licenses/MIT)`;

  } else if (license == 'Apache 2.0') {
    return `[${license}](https://opensource.org/licenses/Apache-2.0)`;

  } else if (license == 'GPL 3.0') {
    return `[${license}](https://opensource.org/licenses/GPL-3.0)`;

  } else {
    return ""; // If there is no license, return an empty string
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==='None') {
    return ""; // If there is no license, return an empty string
  } else {
    return `## License
    
This project is covered under the ${renderLicenseLink(license)} license.
    `
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   
  return `${renderLicenseBadge(data.license)}
   #${data.title}

   # Description

   ${data.description}

   ## Table of Contents

   -[Installation](#Installation)
   -[usage](#Usage)
   -[Testing](#Testing)
   -[Contributions](#Contributions)
   -[Questions](#Questions)
   -[License](#License)

   ##Installation

   ${data.installation}

   ## Usage

   ${data.usage}

   # Testing

   ${data.testing}

   ## Contributing

   ${data.contribution}

   ## Questions

   Follow up with me if you have any questions
        
   Email: ${data.email}

   GitHub: [${data.gitHub}](https://github.com/${data.github})
   
  ${renderLicenseSection(data.license)};


`;
}

 module.exports = generateMarkdown;