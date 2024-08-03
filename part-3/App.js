const App = () => {
    const PERSONS = [
        {
            name: "Alexander Hamilton",
            age: 17,
            hobbies: ["Writing", "Debating", "History"],
        },
        {
            name: "Eliza Schuyler",
            age: 18,
            hobbies: ["Charity", "Music", "Reading"],
        },
        {
            name: "Aaron Burr",
            age: 19,
            hobbies: ["Law", "Politics", "Singing"],
        },
    ];

    return (
        <div>
            {PERSONS.map( person => <Person {...person}/>)}
        </div>
    );
};
