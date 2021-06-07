# The-Movie-Database
Cloning part of ["The Movie Database"](https://www.themoviedb.org) website using React.js, TypeScript and SASS.

---------------------------------
## Table of Contents
* [Implemented Features](#Implemented-Features)
* [Dependencies](#Dependencies)
* [How To Use](#How-To-Use)
* [File Structure](#File-Structure)
---------------------------------

## Implemented Features
- The home page displays the most popular movies from [The Movie Database API](https://developers.themoviedb.org/3) in ascending order.
- Each movie card contains movie title, poster, vote average and release date.
- The user is able to switch between three types of lists (Upcoming, Popular
and Top-rated).
- The user is able to change the movies order (ascending/descending).
- The user is able to click on any movie to display more details about it containing an overview about the movie as well as the movie's cast.
- The app is partially responsive to devices' screens. _Tablets' screens have not been handled yet_.
---------------------------------

## Dependencies
- ### Node JS
Download and install the latest NodeJS version from [NodeJS.org](http://nodejs.org) or check if the NodeJS is installed on your machine by running this command in the CMD: `node -v`.

_Install all other dependencies defined in `Package.json` to avoid install them separately using this command:_
```
npm install
```
---------------------------------
- ### React
We used React.JS to handle the UI of the app.
_You can install React and React-DOM separately using this command:_
```
npm install react
npm install react-dom
```

- ### TypeScript
We used TypeScript in this app, to make it more maintainable and sustainable.
_You can install TypeScript separately using this command:_
```
npm install typescript
```

- ### SASS
We used SASS to handle styling the app.
_You can install SASS separately using the following command:_
```
npm install node-sass
```

- ### Axios
We used Axios to handle the API requests.
_You can install Axios separately using the following command:_
```
npm install axios
```

- ### React-Router-DOM
We used React-Router-DOM to handle routing in our React app.
_You can install React-Router-DOM separately using the following command:_
```
npm install react-router-dom
```

- ### React-Circular-progressbar
We used react-circular-progressbar to display progress bar in the voting rate average to the movies.
_You can install React-Circular-Progressbar separately using the following command:_
```
npm install react-circular-progressbar
```

---------------------------------

## How To Use
- ### Run
To start the app in your local machine, run `npm start` _(usually, it will be hosted at [`localhost:3000`](http://localhost:3000)_).

- ### Deploy
To deploy the app, you need to build it first using `npm run build`.

---------------------------------
## File Structure

| File/Folder Name    | Description                     |
|---------------------|---------------------------------|
| `public/`           | contains favicon and index.html |
| `src/`              | contains all app's resources    |
| `src/components`    | app app's React components along with their styles (SASS files) |
| `src/images`        | app's assets (images and SVGs). |
| `src/style`         | app's common styles and colors. |
| `package.json`      | app's dependencies, scripts, versions, ..etc|
| `tsconfig.json`     | typescript configuration file for this app |
