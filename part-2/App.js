const App = () => {
    const TWEETS = [
        {
            username: "johndoe",
            name: "John Doe",
            date: "Aug 2, 2024",
            message: "This is my first tweet!",
            img: "path_to_image1.jpg",
        },
        {
            username: "janedoe",
            name: "Jane Doe",
            date: "Aug 1, 2024",
            message: "Hello Twitter!",
            img: "path_to_image2.jpg",
        },
        {
            username: "user123",
            name: "User 123",
            date: "Jul 31, 2024",
            message: "React is awesome!",
            img: "path_to_image3.jpg",
        },
    ];

    return (
        <div>
            {TWEETS.map(tweet => <Tweet {...tweet}/>)}
        </div>
    );
};
