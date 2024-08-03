/** Person Component
 *
 * Props:
 * - name
 * - age
 * - hobbies = [<li>...<li>...]
 */

const Person = ({ name, age, hobbies }) => {
    return (
        <article>
            <p>Learn some information about this person:</p>
            {name.length > 8 ? (
                <p>Name: {name.slice(0, 6)}</p>
            ) : (
                <p>Name: {name}</p>
            )}
            <p>Age: {age}</p>

            {age >= 18 ? (
                <h3>Please go vote!</h3>
            ) : (
                <h3>You must be 18 to vote.</h3>
            )}

            <p>Hobbies:</p>
            <ul>
                {hobbies.map((hobby) => (
                    <li>{hobby}</li>
                ))}
            </ul>
        </article>
    );
};
