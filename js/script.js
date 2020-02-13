/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array 
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
  citation: "Book: What I talk about when i talk about running",
  year: "2008"
},

{
  quote: "Running allows me to set my mind free. Nothing seems impossible, nothing unattainable.",
  source: "Kara Goucher",
  year: "2013"
}
]
//console.log(quotes);
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
};

getRandomQuote();
//console.log(getRandomQuote());

/***
 * `printQuote` function
***/
function printQuote() {
  let RandomQuote = getRandomQuote();
  let qouteHTML = '<p class="quote">'+ RandomQuote.quote +'</p>';
      qouteHTML += '<p class="source">' + RandomQuote.source;
      if (RandomQuote.citation){
          qouteHTML += '<span class = "citation">' + RandomQuote.citation + '</span>'+ '</p>';
      }
      else if (RandomQuote.year) {
          qouteHTML += '<span class = "year">'+ RandomQuote.year +'</span>'+ '</p>';
          }
      else {
        qouteHTML += '</p>';
      }
        return qouteHTML;
};
printQuote();
//console.log(printQuote());
document.getElementById('quote-box').innerHTML = printQuote();
//document.getElementById('quote-box').innerHTML = qouteHTML();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote(), false);
//document.getElementById('load-quote').addEventListener("click", printQuote, false);