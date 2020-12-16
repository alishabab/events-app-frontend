<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->

<br />
<p align="center">
  <a href="git@github.com:alishabab/events-app-frontend.git">
    <p align="center"> <img src="https://user-images.githubusercontent.com/33728992/102384540-def27800-3ff2-11eb-86f8-1ddccca4989d.PNG" alt="events-app-frontend" width="600" height="400"> </p>
  </a>

  <h2 align="center">Events App</h2>
  <h3 align="center">A react-redux single page application, where user can signup as a 
  creator or participant. Only creator can create an event. All the users can see all the events and join any event.</h3>

  <p align="center">
    <a href="https://github.com/alishabab/events-app-frontend/issues">Report Bug</a>
    · 
    <a href="https://github.com/alishabab/events-app-frontend/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Test](#test)
* [Live Link](#Live-Link)
* [Built With](#built-with)
* [Contact](#Authors)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

In this project I have developed a single page application with react and redux libraries. A user has to select from one of the two roles while siging up - 'creator' and 'attendee' Only creator can create an event. All the users can see the events and join.
User authentication is implemented with JWT.

App uses react router to route to different components and redux thunk to dispatch async actions. Backend is developed in Ruby on Rails See backend project [here](https://github.com/alishabab/events-app-api).


<!-- Live Link  -->

## Live Link

[Click here](https://afternoon-cliffs-21909.herokuapp.com/)

<!-- INSTALLATION -->

## Installation

To run 'Events App' locally, clone the repository, navigate to it's directory.

#### Follow these commands step by step:-

```bash
git@github.com:alishabab/events-app-frontend.git
cd events-app-frontend
npm install
npm start
```

Now go to [localhost:3000](http://localhost:3000) in your browser.

<!-- Test -->

## Test

To run unit test run `npm test` in root directory.

<!-- BUILD WITH -->

## Built With

- HTML/CSS
- React
- Redux
- Redux Thunk
- React router
- Eslint
- Stylelint
- Jest
- ES6
- NPM
- Github
- Heroku for Live version deployment

<!-- CONTACT -->
## Authors

👤 **Shabab Ali** 
    
- [LinkedIn](https://www.linkedin.com/in/shababali/)
- [GitHub](https://github.com/alishabab)
- [Email](shababsaifi@gmail.com)

<!-- acknowledgments -->

## Acknowledgments

- [React JS](http://reactjs.org/)

## Show your support

Give a ⭐️ if you like this project!

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/alishabab/events-app-frontend.svg?style=flat-square
[contributors-url]: https://github.com/alishabab/events-app-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alishabab/events-app-frontend.svg?style=flat-square
[forks-url]: https://github.com/alishabab/events-app-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/alishabab/events-app-frontend.svg?style=flat-square
[stars-url]: https://github.com/alishabab/events-app-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/alishabab/events-app-frontend.svg?style=flat-square
[issues-url]: https://github.com/alishabab/events-app-frontend/issues

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.