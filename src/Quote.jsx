/** For rendering an inspirational quote.
 *
 * Props:
 * - text
 * - author
 *
 * State:
 * None
 *
 *  QuoteApp -> Quote
 */

function Quote({ text, author }) {
    return (
        <div>
            {text} -{author}
        </div>
    )
}

export default Quote;