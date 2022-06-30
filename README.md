# Amazon Website FULLSTACK Clone (made with REACT)

This is my first REACT App and I was able to clone the Amazon E-Comm Website and add functionalities like AddtoCart, Register, Login, Logout and Payment features

**Note: This App is still under Development!**

The deployed app has an earlier version, some backend features (like payment transacs and realtime database) have been updated in the source code and you can access it through the development mode for now due to some technical issues. They'll be resolved soon and the latest version will be updated here itself soon.
### Deployed APP - https://clone-react-63f94.web.app/

## Tools Used

This App is made with React(Frontend) and for Backend Operations I've made use of Firebase.

## Some Dependencies

Install Firebase - `npm i firebase`
Firebase Tools - `npm install -g firebase-tools`

Setup Stripe for Payment Functionality : 
`npm i @stripe/stripe-js`
`npm i @stripe/react-stripe-js`

Install Axios
`npm i axios`

CD into functions folder and install these dependencies
`npm i express`
`npm i cors`
`npm i stripe`

Make sure to put your secret key of your STRIPE Account inside of ./functions/index.js

You can view the APP in the DEV mode by:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


