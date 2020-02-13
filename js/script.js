/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Create `quotes` array of objects to store data of quotes with individaul properties such as
 * quote, source, citation,and year
***/
const quotes = [
{ quote: "if you concentrate on the rear mirror, you'll crash and cause an accident.",
  source: "Eliud Kipchoge"
},
{ quote: "Year ago, women sat inkitchens drinking coffee and discussing life. Today, they cover the same topics while they run.",
  source: "Joan Benoit Samvelson"
},

{
  quote: "Don't dream of winning, train for it.",
  source: "Mo farah"
},

{
  quote: "Pain is inevitable. Suffering is optional",
  source: "Haruk Murakami",
  citation: 'Book:"What I talk about when I talk about running"',
  year: "2008"
},

{
  quote: "Running allows me to set my mind free. Nothing seems impossible, nothing unattainable.",
  source: "Kara Goucher",
  year: "2013"
}
]
/***
 * Create `getRandomQuote` function to return a random object from the quotes array
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
};

getRandomQuote();
//console.log(getRandomQuote());

/***
 * Create `printQuote` function to calls the getRangomQuote function, Prints a quote and source property with every quote
***/
function printQuote() {
  let RandomQuote = getRandomQuote();
  // Create qouteHTML variable to store the HTML string
  let qouteHTML = '<p class="quote">'+ RandomQuote.quote +'</p>';
      qouteHTML += '<p class="source">' + RandomQuote.source;
  //if the random quate has a citation property, concatenate a <span> with class "citation"
      if (RandomQuote.citation){
          qouteHTML += '<span class = "citation">' + RandomQuote.citation + '</span>'+ '</p>';
      }
  //if the random quate has a year property, concatenate a <span> with class "year"
      if (RandomQuote.year) {
          qouteHTML += '<span class = "year">'+ RandomQuote.year +'</span>'+ '</p>';
          }
      else {
        qouteHTML += '</p>';
      }
        return qouteHTML;
};
printQuote();
//set the printQuote functon to return full HTML string displaying a random quote
document.getElementById('quote-box').innerHTML = printQuote();
//try this >document.getElementById('quote-box').innerHTML = qouteHTML; not working
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
// try this> document.getElementById('load-quote').addEventListener("click", printQuote(), false); not working