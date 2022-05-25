# Getting Started with Create React App

This project was bootstrapped with [Create React App]

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode with DEV-SERVER I added this script to prevent CORS error

### `yarn start`

Runs the app in the development mode with out DEV-SERVER it is lead to CORS error .\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

#### SELECTED STORIES

1-Use Typescript (I used TypeScript. Actually, I LOVE typescript :)) )
2- Responsive design, works on Filter by name and Integration tests of mobile and tablets (I used tailwindcss to handle responsive design and I liked that too)
3-Sort by name and office.
4-Filter by name and office.
5-Enable switch between a grid and a different view. (I added a button that switch between CARD view and TABLE view)
6-Available on a free public url (such as Azure, Heroku)(About this, I tried to deploy it on Heroku but had lots of trouble and then I used Vercel)

#### DESCRIPTION OF MY PRODUCT

This project shows data of tretton37 colleagues in both card view and table view, with some provided functionalities like filter and sort, and you can check it out on devices of different sizes.

#### THE THOUGHTS BEHINDD THE DESIGN OF MY CODE

I used Create React App and added typeScript to form every data, function, ect the way I prefer them, with a specific type. I configured "linter" and "prettier" because they made everything much cleaner and easier to follow. I added "husky" to have a better rule about the commits. I have enum and interface files for more clarity
I try to part different specific parts into individual components and added
dev-server to prevent CORS error.

Motivation and reasoning of installed packages

#### MOTIVATION AND REASONING OF INSTALLED PACKAGES

The packages I used is almost minimal, I don't like to add lots of unnecessary packages.

#### IS THERE POSSIBLE TO GET A BETTER VERSION ?

The answer is definitely yes.
I wanted to implement the unit test and the rest of the stories. Still, based on the time mentioned in the document, I should not spend more than 6 hours on the assignment, and I tried to stick to the rules
about the optimisation; I prefered to implement pagination to fetch data from the service because we don't need to render all of it, at the same time. We could use lazy loading based on user scroll and fetch data again. Also, I could use a package like react window react-window or react-virtuoso to render cards in a more efficient way
