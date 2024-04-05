"use strict";

async function getRandomQuote() {
  const response = await fetch (`https://inspo-quotes-api.herokuapp.com/quotes/random`);
  const quoteData = await response.json();

  return quoteData.quote;
}

export default getRandomQuote;