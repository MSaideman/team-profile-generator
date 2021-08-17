# team-profile-generator

- Github URL: https://github.com/MSaideman/team-profile-generator
- Deployed URL: https://msaideman.github.io/team-profile-generator/

## Description

Team Profile Generator will create a website that will display your team member's profiles.

![screencapture-file-Users-mackenziesaideman-Bootcamp2021-ucsd-sd-virt-fsf-pt-06-2021-u-c-master-10-OOP-10-OOP-02-Homework-team-profile-generator-dist-index-html-2021-08-17-14_15_36](https://user-images.githubusercontent.com/82477037/129779128-d5eed1e4-5929-49ee-a587-36c33fe4ab3f.png)

## Video Tutorial

https://user-images.githubusercontent.com/82477037/129779828-4f79d586-3f41-4eea-92b0-bb84aacec48e.mp4

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

1. npm i inquirer
2. npm i jest
3. npm i bootstrap-icons

## Usage

I WANT to generate a webpage that displays my team's basic information, such as ID and email.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## License

This project is convered under the MIT License.

## Questions

For questions about this project, please reach out by email at mbsaideman@gmail.com.
