# Service Hero - Coding Challenge

Coding challenge template for Service Hero's engineering candidates using NextJS

## Start
This project uses `nvm` to define the node version, you can run `nvm use` to set the node engine.

Once the node engine is set, you can start the project by running `next dev` in yarn or you package manager of choice.

### Index
In `pages/index.tsx` you will find that some code is already there, the `getServerSideProps` function gets the initial data
to show the ingredients, structures and sandwiches, the only thing left is to arrange them in a grid and add the state for
the user to select 3 sandwiches.

### zodiacSigns
In `pages/api/zodiacSigns.tsx` is where you need to create a function that will return a `zodiacSign` based on the body of
the query, all the boilerplate has been written for you so you only need to get the zodiac signs data from the `clients/mockDB.tsx`
file.
