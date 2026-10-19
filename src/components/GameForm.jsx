import { useState } from "react";

/* GameForm component: Lets user enter a game title and add it to the backlog.
onAddGame is a function received from the parent component */

function GameForm({ onAddGame }) {
    //Store text currently entered into the input
    const [title, setTitle] = useState("");

    //Run when user submits the form.
    function handleSubmit(event) {
        //Stop browser from refreshing the page
        event.preventDefault();

        //Remove extra spaces from the beginning and end
        const trimmedTitle = title.trim();

        //No blank titles
        if (trimmedTitle === "") {
            return;
        }

        //Ask parent component to add the new game
        onAddGame(trimmedTitle);

        //Clear the input after the game is added
        setTitle("");
    }

    return (
        <section className="game-form-section">
            <h2>Add a Game</h2>

            <form className="game-form" onSubmit={handleSubmit}>
                <label htmlFor="game-title">Game Title</label>

                <input
                    id="game-title"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Enter a game title"
                    required
                />

                <button type="submit">Add Game</button>
            </form>
        </section>
    );
}

export default GameForm;