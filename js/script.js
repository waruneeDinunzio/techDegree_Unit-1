/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Create `quotes` array of objects to store data of quotes with individaul properties such as
 * quote, source, citation,and year. I add image property to them.
***/
const quotes = [
{ quote: "if you concentrate on the rear mirror, you'll crash and cause an accident.",
  source: "Eliud Kipchoge",
  image: "Eliud Kipchoge.jpeg"
},
{ quote: "Year ago, women sat inkitchens drinking coffee and discussing life. Today, they cover the same topics while they run.",
  source: "Joan Benoit Samvelson",
  image: "Joan Benoit.jpeg"
},

{
  quote: "Don't dream of winning, train for it.",
  source: "Mo farah",
  image: "Mo Farah.jpeg"
},

{
  quote: "Pain is inevitable. Suffering is optional",
  source: "Haruki Murakami",
  citation: "Book:\"What I talk about when I talk about running\"",
  year: "2008",
  image: "Haruki Murakami.jpg"
},

{
  quote: "Running allows me to set my mind free. Nothing seems impossible, nothing unattainable.",
  source: "Kara Goucher",
  citation: "twitter",
  year: "2013",
  image: "Kara Goucher.jpeg"
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

/***
 * Create `printQuote` function to calls the getRangomQuote function, Prints a quote and source property with every quote
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  // Create qouteHTML variable to store the HTML string
  let qouteHTML = '<p class="quote">'+ randomQuote.quote +'</p>';
      qouteHTML += '<p class="source">' + randomQuote.source;
  //if the random quate has a citation property, concatenate a <span> with class "citation"
      if (randomQuote.citation){
          qouteHTML += '<span class = "citation">' + randomQuote.citation + '</span>';
      }
  //if the random quate has a year property, concatenate a <span> with class "year"
      if (randomQuote.year) {
          qouteHTML += '<span class = "year">'+ randomQuote.year +'</span>';
          }
  //if the random quate has a image property, concatenate a <img> with link to a image file
      if (randomQuote.image) {
          qouteHTML += '<img src = "images/' + randomQuote.image + '"'+ 'style="float:right;width:200px;height:250px;"'+'</img>';
      }
        qouteHTML += '</p>';
      
      document.getElementById('quote-box').innerHTML = qouteHTML;
};
printQuote();
/***
 * Create 'RandomBackgroundColor' to randomly change backgrounnd Color
***/

function RandomBackgroundColor() {
  let RandomRed = Math.floor(Math.random()*256);
  let RandomGreen = Math.floor(Math.random()*256);
  let RandomBlue = Math.floor(Math.random()*256);
  let RandomColor = "rgb(" + RandomRed + "," + RandomGreen + "," + RandomBlue + ")";
  document.body.style.background = RandomColor;
}
RandomBackgroundColor();

//set the printQuote functon to return full HTML string displaying a random quote
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
//set the RandomBackgroundColor functon to display random background color
document.getElementById('load-quote').addEventListener("click", RandomBackgroundColor, false);
/**
 * Create timing function to print a new quote to the page at 10 seconds intervals
 */
function autoPlay() {
  window.setInterval(printQuote, 10000);
}
autoPlay();