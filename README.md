# NYT Take home

Art Times is a an application built using the framework React that displays some of the most popular art related articles from the New York Times. Users are able to filter by subcategories using a drop down menu. Using Context Api all the data is fetched and then put through a cleaning function where Id's are added to each article. 

#### Architecture
- Context Api
---
- App
- Article Holder
- Article
---
- App
- Details

## How to Run

1. Clone the repo down to your machine
3. Open the root directory and run `npm i` to install dependencies
4. Run `npm start` to initialize the webpage
5. Open the site by copying and pasting the server location http://localhost:3000/ in your address bar

---

## Features


**Listings Page:**
On page load the user is directed to all the top results from the NYT most popular art articles. From this page a user can filter their results and see details for a specific busines. 

![DiverCity - Home Page](https://media.giphy.com/media/OuiO8r0nodC7JOWpvT/giphy.gif)


**Subcategory Filter:**
The subcategory filter is available for a user to narrow their business search. The user can select the subcategory dropdown and filter the articles by the selected subcategory. The user can choose to revert the search to show all business listings by selecting show all at the top of the subcategory list.

![DiverCity - Listings Page](https://media.giphy.com/media/6X9LlZPodhAlW6Dg0J/giphy.gif)

**Article Detail Page:**
From the Listings page, the user can click an article to see more details.  From this page a user can find details about the article and an embedded link to the article.

---

### Technologies Used
- JavaScript
- React
- React Hooks
- React Router
- Context API
- CSS
- Cypress


#### Contributors
<table>
    <tr>
        <td> Emili Kaiman: <a href="https://github.com/Ekaiman">GitHub</td>
