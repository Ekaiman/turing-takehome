# NYT Take home

DiverCity: Inclusive Business Guide is the capstone project built during Mod 4 of Turing School of Software & Design. This application is resource for users to browse and discover LGBQT+ & BIPOC owned businesses. The frontend structure utilizes React.js framework, React Context API for global state management and Cypress for End-to-End testing automated with CircleCI.

## Goals

- Use an agile process to turn well defined requirements into deployed and production ready software
- Gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams
- Explore and implement new concepts, patterns, or libraries that have not been explicitly taught while at Turing
- Practice an advanced, professional git workflow including a Pull Request Review
- Gain experience using continuous integration tools to build and automate the deployment of features
- Build applications that execute in development, test, CI, and production environments
- Focus on communication between front-end and back-end teams in order to complete and deploy features that have been outlined by the project spec

## How to Run

1. Clone the repo down to your machine
3. Open the root directory and run `npm i` to install dependencies
4. Run `npm start` to initialize the webpage
5. Open the site by copying and pasting the server location http://localhost:3000/ in your address bar

---

## Features

**Search Location:**
On page load, the business search location defaults to Atlanta, GA. Users can enter a new city by using the form located near the top of the page. After submission, the search results update using the new location - regardless of which page it was changed from.

![DiverCity - Home Page](https://media.giphy.com/media/OuiO8r0nodC7JOWpvT/giphy.gif)

**Listings Page:**
The categories available for a user to search are Food & Drink, Shopping, and Arts & Entertainment. After selecting a category, the user is directed to search results with a list of businesses to choose from. From this page a user can filter their results, see details for a specific business, or save a business to their "Want to Visit" list. 

![DiverCity - Listings Page](https://media.giphy.com/media/6X9LlZPodhAlW6Dg0J/giphy.gif)

**Subcategory Filter:**
The subcategory filter is available for a user to narrow their business search on the left corner above the business listings. The user can select the subcategory dropdown and filter the businesses by the selected subcategory. The user can choose to revert the search to show all business listings by selecting show all at the top of the subcategory list.


**Business Detail Page:**
From the Listings page, the user can select the "Learn More" button. The user is directed to the Business Detail Page. From this page a user can find details for the business of their choice, including the address, phone number, business hours, Yelp listing link, and recommendations from users for the given business. From this page the user can go back to the listings page, or direct to Home or the "Want to Visit" page, where any bookmarked businesses will be listed.





---

### Project Challenges
- Finding an API meeting the needs for verified LGBQT+ & BIPOC owned businesses
- Asynchronously working with a combined frontend and backend team 
- Learning and integrating Context API with React Hooks in a blended team
- Pivotting from utilizing geoplugin package 

### Project Wins
- Utilizing Agile methodology 
- Implementing Continuous Integration (CircleCI)
- Successfully communicating progress, including wins and challenges
- Seemlessly incorporated ansychronous and paired programming when necessary

### Technologies Used
- JavaScript
- React
- React Hooks
- React Router
- Context API
- PropTypes
- CSS
- HTML
- Cypress
- Circle CI
- Heroku
- VS Code
- Atom

#### Future Additions & Improvements
- Business of the Day featured on Home Page
- Sort businesses by distance from your location/address
- Sign-in functionality
- GeoPlugin Package
- Bookmark from Business Detail Page

#### Credits
- Brand Image: [Macrovector](https://www.vecteezy.com/vector-art/4454727-social-diversity-people-composition)
- Button Icons: [Font Awesome](https://fontawesome.com/icons) 
---

#### Contributors
<table>
    <tr>
        <td> Emili Kaiman: <a href="https://github.com/Ekaiman">GitHub</td>
