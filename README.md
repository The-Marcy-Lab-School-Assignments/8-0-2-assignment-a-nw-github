# 8-0-2-assignment

**[https://eight-0-2-assignment-a-nw-github.onrender.com](https://eight-0-2-assignment-a-nw-github.onrender.com)**

In this assignment, you will use Express as a Middleman for API requests. Refer to the [lecture notes](https://github.com/The-Marcy-Lab-School/8-0-2-express-api-middleman) for support.

**Table of Contents**
- [Short Responses](#short-responses)
- [Starter Code](#starter-code)
- [Grading](#grading)
- [Part 1 — Setup](#part-1--setup)
- [Part 2 — API Middleman](#part-2--api-middleman)
- [Part 3 — Deploy](#part-3--deploy)

## Short Responses

Do them first!!

## Starter Code

Open your Giphy Search React assignment (`7-0-2`). It should, at minimum, be able to fetch and render the top three trending gifs.

Fork this repository

## Grading

Your grade on this assignment will be determined by the number of tasks you are able to complete. Tasks appear as a checkbox, like this:

- [ ] example of an incomplete task
- [x] example of an completed task

Feel free to mark these tasks as complete/incomplete, however your instructor will likely modify your tasks when grading.

This assignment has 13 tasks:
- 5 setup tasks
- 7 server application tasks
- 1 deployment task

You got this!

## Part 1 — Setup

Open your Giphy Search React assignment (`7-0-2`). It should, at minimum, be able to fetch and render the top three trending gifs.

* `cd` into the `giphy-search` folder and run `npm run build` to create the static assets `dist/` folder.
* In the root directory, create a `server` folder and `cd` into it
* Create an `index.js` file.
* Create a `.env` file and store your Giphy API key inside

    ```
    API_KEY="paste-api-key-here"
    ```

* Create a `.gitignore` file with

    ```
    node_modules/
    .env
    ```

* Run `npm init -y` to create a `package.json` file.
  * Run `npm i express dotenv`
  * Run `npm i -D nodemon` to install Nodemon as a dev dependency
  * Modify the `package.json` file with the following `"scripts"`:

    ```json
    "scripts": {
      "dev": "nodemon index.js",
      "start": "node index.js"
    },
    ```

While working on your server, use `npm run dev` to run the server and have it restart whenever you make changes.

When deploying, you will use the `npm start` command to start the server using the normal `node` command.

**Setup Technical Requirements**

Before continuing, make sure that these tasks are completed!

- [ ] Has a `giphy-search` project folder with a built `dist/` folder
- [ ] Has a `server` folder with an `index.js` file and a `package.json` file inside
- [ ] `package.json` has `express` and `dotenv` installed as a dependency and `nodemon` as a dev dependency
- [ ] `package.json` has a `"dev"` script that uses `nodemon` and a `"start"` script that uses `node`
- [ ] Environment variables are stored in the `.env` folder and `.env` is added to the `.gitignore` file

## Part 2 — API Middleman

In `server/index.js`, create a simple Express server application. It should:
* Import environment variables from `.env` using `dotenv`
* Serve static assets from the `giphy-search/dist` folder
* Have an `/api/gifs` endpoint that can fetch from the Giphy API using your API key

Update the frontend React application such that it sends requests to the server using the same origin instead of directly to the Giphy API
* Update the `vite.config.js` file to enable proxy requests.

Add a search endpoint to your server, letting the frontend send search GET requests to the backend using query parameters.
* When the user submits the search form with the term `"fox"`, the frontend should send a request to `/api/gifs?search=fox`.
* When the server receives this request, it should look at the `req.query` object to find the `search` value and then make a request to the Giphy API's search endpoint.

**Server/Frontend Application Technical Requirements**

- [ ] In `index.js`, the `express()` function is used to create an `app`
- [ ] The `express.static()` middleware is used to server the static assets in the React application's `dist/` folder.
- [ ] The `app` listens on an available port (I recommend `8080`)
- [ ] A `/api/gifs` endpoint is available. 
- [ ] The server can send a fetch request to the Giphy API using the API Key from `process.env`
- [ ] The frontend `vite.config.js` file has been updated to enable proxy requests
- [ ] The `/api/gifs` endpoint can parse the `req.query` parameters to get the search term and make a request to the Giphy API's search endpoint.

## Part 3 — Deploy

When you're done, push your code to github and [follow these steps to deploy using Render](https://github.com/The-Marcy-Lab-School/render-deployment-instructions). During the setup step, there will be a chance to add your API Key from Giphy as an environment variable.

Then, add the deployed link to your GitHub About section of the Giphy Search app. Click on the gear icon to set the Website url (see below)

![](./images/deployed-github.png)

**Deployment Technical Requirements**

- [ ] Your GitHub page has a link to the deployed server in the About section. 
