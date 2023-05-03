# My Single Page Ecomm Application Final Project

## This is a mock singlepage fullstack ecom app created with the MERN stack.

### Description

Welcome to my fullstack single-page ecom app. This app uses React.js as its front-end framework and Express.js as its back-end framework. The application stores its data in a MongoDB nosql server.

## Tech Stack
​
- [Required] Node - Runtime
- [Required] React - Client Framework
- [Required] Express - Server Framework
- [Required] MongoDB - Database
- [Required] Git - Code Versioning
- [Required] Github - Code Storage and Collaboration
- [Required] CORS - Express CORS Library
- [Required] bcryptJS - User Authentication
- [Required] JsonWebToken - User Auth Tokens
- [Suggested] Bootstrap - CSS Framework
- [Suggested] Nodemon - Server Hot Reloading
- [Suggested] React-Router - Client Side Routing
- [Suggested] JSDOC - Code Comment Framework
- [Suggested] uuidv4 - Unique ID Generator

## Application Features

### User Interface
This application utilizes React.js as its frontend framework to create an efficient single page layout with a navigation bar permanently displayed at the top of the page and the outlet diplayed underneath.

The application takes a mobile first approach to its styling efforts and utilizes the tailwind.css framework to directly apply css style attributes to HTML elements by writing them into the html className(React.js) attribute directly.

### User Authentication
The user can register their email as a username and create a password. The password will be encrypted. The user can login with username and password and will be issued a JSONwebtoken. The user can logout when they desire.

At the login page there is a link that if clicked will navigate to a new user page where a new user can register the account information.

### Navigation Bar
The application features a navigation bar permanently displayed at the top of the page. The navbar features the company logo, a search bar feature, and three icons which allows you to navigate to login, logout, and navigative to your shopping cart.

### Products Page
This application features a product page which fetches the product list from a fake products API and maps out the response onto the products page in product cards. The product cards feature an add to cart button where users can click and add the associated product to the shopping cart.

The products page also features a shopping cart summary displayed to the right of the product cards in medium sized screens and hides the shopping cart summary when the screen size is smaller than medium. 

### Shopping Cart
Once the user has completed their shopping they click on the proceed to checkout from their cart summary or click the shopping cart icon on the navbar to navigate to the shopping cart review page. On this page the user can adjust the quantities of each items in their shopping cart which will be reflected in the cart total.

### Order-Review & Confirmation
After the user has completed the reivew of their shopping cart. They click proceed to checkout button at the bottom of the shopping cart review page and they are directed to the shipping and details page. The user completes and ssaves their shipping and billing information and clicks another proceed to checkout button and navigates an dorder summary page to review the final order summary.

Once complete the user then clicks the submit order button and the order is sent to the database to both be stored in an order collection and to the users account in an order history. 
