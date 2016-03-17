# React Redux API Browser

A React Redux Scaffold to aid in designing the stores and actions
supporting a React UI.

Simply displays the content of various stores using the ObjectInspector React Component


## Setup

- learn [Redux](http://redux.js.org)
- clone this project
- install dependencies via `npm install`
- run a test server by `npm run server`

## Scripts

- `npm start` run a test server
- `npm run build` build production app



## Feature Inherited from parent project [redux-react-scaffold](https://github.com/lcjnil/react-redux-scaffold)

- ES6+ support via [babel](https://babeljs.io)
- Redux and its best practice (debug, style, routing)


### Path Alias (resolve)
Anything in `src/components` can be required by only `components/xx/xx.js`

see `webpack.config.js` `resolve` for more.

### Server Mocks

Write your server mocks at `src/mocks`.

### Devtools

 To change the Devtool position press `ctrl + q` . To hide the dev tool press `ctrl + h`

## TODO

- [ ] break out stores to multiple files
- [ ] add asynchronous data loading into stores
- [ ] add "wiremock" capability to save responses for testing
