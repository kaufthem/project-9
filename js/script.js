/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Stores the individual properties of 5 quote objects. Each quote object contains the following properties: quote, source, citation, year, tags.
***/
var quotes = [
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: "2016"
  },
  {
    quote: 'Friendship... is born at the moment when one man says to another "What! You too? I thought that no one but myself..."',
    source: "C.S. Lewis",
    citation: "The Four Loves",
    year: "1960",
    tags: "friendship"
  },
  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    source: "Martin Luther King Jr.",
    citation: "A Testament of Hope: The Essential Writings and Speeches",
    year: "1986",
    tags: "inspirational, love, peace"
  },
  {
    quote: "What does not kill me makes me stronger.",
    source: "Friedrich Nietzsche",
    citation: "Twilight of the Idols",
    year: "1888",
    tags: "strength"
  },
  {
    quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    source: "William Shakespeare",
    citation: "As You Like It",
    year: "1599",
    tags: "wisdom"
  }
]


/*** 
 * `currentQuote` object 
 * Stores the current quote being displayed.
***/
var currentQuote = quotes[0];


/*** 
 * `timer` object 
 * Stores the timer that will update the quote every 20 seconds. 
 * The timer will reset if the button is pressed before the 20 seconds are up.
***/
var timer = window.setInterval(printQuote, 20000);  


/***
 * `getRandomQuote` function
 * Creates a random number, and uses that random number to return a random quote object from the quotes array.
***/
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}


/***
 * `printQuote` function
 * Calls the getRandomQuote and randomBackgroundColor functions. Ensures that the chosen quote is different from the current one.
 * Uses the returned quote object to build a string of HTML and quote properties.
 * Uses that string to display a random quote in the browser.
 * Stops and restarts the 20 second timer.
***/
function printQuote() {
  var randomQuote;
  do { randomQuote = getRandomQuote(); } while (randomQuote === currentQuote);
  currentQuote = randomQuote;
  randomBackgroundColor();
  var htmlString = `<p class="quote">${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;
  if (randomQuote.hasOwnProperty('citation')) htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  if (randomQuote.hasOwnProperty('year')) htmlString += `<span class="year">${randomQuote.year}</span>`;
  if (randomQuote.hasOwnProperty('tags')) htmlString += `<br><span>tags: ${randomQuote.tags}</span>`;
  htmlString += `</p>`;
  document.getElementById('quote-box').innerHTML = htmlString;
  window.clearInterval(timer);
  timer = window.setInterval(printQuote, 20000);
}


/***
 * `randomBackgroundColor` function
 * Changes the background color to a random one different from the current color.
***/
function randomBackgroundColor() {
  var currentColor = document.body.style.backgroundColor;
  do { document.body.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16); } while (document.body.style.backgroundColor === currentColor);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);