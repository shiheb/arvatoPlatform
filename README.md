# Arvato Platform
Cold assessment in Arvato Code Challenge 

further description would be found after description of the available scripts as the code use React as frontend framework
#################################################################<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify




#################################################################<br>

##Requirements:

 Build up and style a responsive "product listing page" using HTML, CSS (SASS or LESS) and JavaScript using principles of modern, state-of-the-art webdesign.

 

Please implement the following features:

- responsiveness

- endless scrolling

- hover functionality on a product providing additional information like color variations etc.

- a filter functionality (e.g. after brand, color and size)

- a product comparison overlay

- a mini-basket functionality

- feel free to use frameworks

- be a bit creative and pay attention to the details


Nice examples to lean on are puma.com, adidas.com and nike.com

###############################################################
##what I have tried to do

As the project require some big lines to be consultable such an infinte scroll window, some filters, tables, API manipulation.
Some frameworks are used to simplify the work and maintain all tasks mentioned the requirements list of the product owner.

Axios (REST API data recupertion) , react-infinite-scroller (endless scrollable window), Bootstrap, reactstrap (responsive aspect, sweet button and hoverable table), node-sass (for SCSS files).


After bringing data from the API server (I created a Restfull API for products with some types : size, name, brand, price .. ),The json file attached with the project (products.json is comparable to the most classic API of the big e-commerce companies..)
taking the data from the Json file, we make a slice of 30 first products and take the rest of the products after scrolling with the mouse .. for that I used InfiniteScroll from react-infinite-scroller , easy to implement and effecient . we just have to bind a function to fetch more data for it, this function will take more products after 1000 seconds of scrolling. and it will show a loading message to wait for the next render.

As we have to filter the reuslt after clicking the checkboxes, I added all the brands and the size to my API in the server side to facilitate the access to this data.
After clicking on a filter, we update the rendered data (we add it the previous state if it exists, otherwise we display alone)
we update also the slice part (the first data to show and the rest of this data to match with this filter).

After rendering the product , I make it hoverable with some diffrent shadow and other style properties matching its key with the actual index of map function.. I show more details by the same occasion (size and brand)... 

The add to cart button, send the information to a parent of a parent component to increment the counter of the shopping cart.
All buttons are hoverable and have a different style when we click on it.

when we want to compare some products , I add an other button for every product, and I trriger the creation of responsive hoverable table showing the different important specifications of the that product. The comparison table will only appear after the first click on the "compare to" button.




Here We can visit the platform in real time
https://arvatoplatform.chihebhmida.now.sh/


I hope I covered all the tasks required by this assessment, I confirm that the project needs more enhancements to be nicer to consult.
I would like to thank you for this opportunity you give to me to show some of my skills.
