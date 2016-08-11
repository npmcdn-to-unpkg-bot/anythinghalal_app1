# Project 4A AnythingHalal - Search for Halal Food Places

This project was done in General Assembly Web Development Immersive Course. Students are taught and develop projects during their 3 months full time in-campus learning.

This is a simple Halal Food Listings and Review ExpressJS Web app done on ExpressJS web framework. It also have publicly consumable API available.

The app is found here: [AnythingHalal](https://anything-halal.herokuapp.com)
Additional extension /api to view

## Technology

- NodeJS
- ExpressJS
- jQuery
- Vanilla JS
- HTML5
- CSS3
- MongoDB
- Geocoder
- LeafletJS

## How it works

Signed up users are able to create halal food listings and make a review of listed places.

## Running The Demo

Clone the repository, then

* `npm install` from the root folder
* `npm start` from the root folder
  * alternatively: run `node host/bin/www`

## Project Structure

This project is split up into multiple Express application instances,
each of which handles a specific portion of the over-all web application.

The primary application is:

* [`host`](/host): The root express app and the actual web server into which the other apps are mounted

The sub-application instances include:

* [`api`](/api): Mounted at `/api`, handles the JSON based API access for the app
* [`web`](/web): Mounted at `/`, handles the core web pages for browser based usage
* [`errors`](/errors): Mounted in the root express app, handles root level 404 and route / middleware errors

## Why splitting the App?

The `api` sub-app does not need to render any Jade views, and only handles models, controllers and routing for API endpoint while the `web` portion handle routes to pages and frontend user controllers.

The `host` sub-app routes main `/` root path to specific routing whether to `API` or `Web` portion.

By separating the application into multiple sub-apps, code is easier to
maintain as it contains less clutter from unrelated things.

## Contact

For any bugs, please contact me at flight846@gmail.com
