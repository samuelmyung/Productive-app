import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Quote from "./Quote";
import getRandomQuote from "./apiHelper";

/** App for receiving a random inspirational quote.
 *
 * Props:
 * None
 *
 * State:
 * - quote: object of a random quote
 *
 * App -> QuoteApp -> Quote
 */

function QuoteApp() {
    const [quote, setQuote] = useState();

async function getQuote(){
    return await getRandomQuote();
}

async function handleClick() {
   return setQuote(await getQuote());
}

return (
    <div>
        {quote && <Quote text={quote.text} author={quote.author}/>}
        <button onClick={handleClick}> "{quote ? "Nu quote" : "Click here for an inspirational quøte!"}" </button>
    </div>
)
}

export default QuoteApp;