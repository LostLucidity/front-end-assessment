# Wreckingball Studio + Labs 
## Front End Assessment Junior - Mid-level Candidate

### Environment Dependencies
* Git
* Node

### Setup
* Clone this repository on your local machine
* Run `npm install` in the project root
* Run `npm start` in the project root. This creates webserver listening on port 8080, which will host the data endpoint and server your solution.

### Project Structure
`/server.js` (simple express server exposed on localhost:8080)

### Requirements
* Create a directory named 'public' in the root of the project. This is where your solution files will be served from.
* Create an index.html file in the public directory.
* Create a basic layout in `/public/index.html` with an unordered list and a select tag.
* Organization of your JavaScipt and CSS is up to you. 
* Make an ajax get request to http://localhost:8080/data. This will return a JSON object containing a single property, `data`. The value of `data` will be a comma seperated string of random numbers between 0 and 100.
* Create an array of objects based on this data.
  * The objects should have a single property, `number` which will contain a number. (make sure this is a number, not a string)
  * The objects should have a single **prototype method** `toString` which should return the following:
    * If `number` is divisible by 3 return `'Wrecking'`.
    * If `number` is divisible by 5 return `'Ball'`.
    * Otherwise return the `number` property as a string.
  * The array should contain no duplicates; `number` is the unique identifier.
  * The array should be ordered by `number` ascending.
* Populate the unordered list in index.html using the values in this array. 
  * The contents of each list item should be the value returned by the `toString` method
  * Each list item should have a unique class added to it which will be used later for a DOM query.
  * The odd numbered list items should have a grey colored background.
* Create a select tag and populate the options using the values in this array.
  * The contents of each option tag should be the value returned by the `toString`.
  * The `value` attribute of each option tag should contain the value of the `number` attribute.
* Bind an event handler to the change event of the select tag.
  * When this event fires, find the matching li element in the unordered list and turn it's text red. Make sure all other li tags revert their text to black.
* Using **event delegation** bind an event handler which will handle click events for all li tags.
  * When this event fires alert the contents of the li tag that was clicked.
* Do not leak any variables or functions to global scope.
* Post your solution to your github account.
* Email a link to your solution to jschroeder@getwrecked.com 

### Notes
* The above solution should be completed using vanilla JavaScript (no libraries).
* I will be testing your solution in Google Chrome.