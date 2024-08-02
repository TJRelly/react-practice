/** Tweet: a single tweet.
 *
 * Props:
 * - name
 * - username
 * - data
 * - message
 */

const Tweet = ({ username, name, date, message }) => {
    return (
        <article>
            <p>{ name }<span> @{ username } · { date }</span></p>
            <p className="message">{ message }</p>
        </article>
    )
}