# Formula1 - Results Prediction (Mimic) v0.5

This project aims to mimic Results Predictions of Formula 1 races, by taking input as teams, circuit, weather using React.

It is developed in an organised manner while keeping in mind that one can easily connect their own prediction model with the backend easily as props/etc. are being passed around for access and can be made use of, in case you have your own prediction model.

![Project Screenshot](https://i.imgur.com/aFGrwKb.png)

(NOTE: before running this project, after you've done cloning this repository, go to the project's public folder and copy/paste files from the .zip file located [Here](https://stdntpartners-my.sharepoint.com/:f:/g/personal/rahul_rana_studentambassadors_com/EnsVhJeiM95EjVX1hcydu2oBEF9qvnoBeXZljRAxNZxEfA?e=MAVaAA). This is because the media files were too large to be uploaded on GitHub, so unfortunately each user needs to transfer these files themselves)

## Problems:
- Public folder not available on Github, need to be downloaded from OneDrive link (mentioned in this document, check in description section above) (looking forward to fix soon)
- Only supports 1600x900 screen size, run in full screen mode for best experience ([F11] windows or [Fn+F followed by Cmd+Shift+F] for MacOS). Not resposive design. No mobile support. (looking forward to fix soon)
- Current version only mimics the backend and orchestrates the messages, does not predict in realtime (no bandwidth to fix any time soon, contributions are welcomed)

## Future Features:
- Contents of public folder to be hosted on other site to remove local dependencies
- Responsive design
- realtime prediction/connecting to databases
- additional inputs such as tyre types/damage to car/no. of laps/strategy/fuel/etc.
- Host-friendly version of this project that can be deployed on Netlify/Heroku/etc.

## How to contribute?
- Get in touch with me: Rahul Rana on [Twitter](https://twitter.com/owlrana) or [LinkedIn](https://www.linkedin.com/in/owlrana/) or [Mail me](mailto:me.rahulrana@outlook.com)
- Make a pull request, mention all details of your contribution and problem you're solving
- Can suggest more changes, add more features/problems

## About the author
I am senior undergrad from New Delhi, India. New to development, specifically React. Open to new learning/collaborations. 
You can connect with me/read about me on [Twitter](https://twitter.com/owlrana) or [LinkedIn](https://www.linkedin.com/in/owlrana/).

## Available Scripts

In the project directory, you can run:

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
