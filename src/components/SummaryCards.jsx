function SummaryCards({ games }) {
    //Count every game in the array
    const totalGames = games.length;

    //Count games user wants to play
    const wantToPlay = games.filter(
            (game) => game.status === "Want to Play"
    ).length;

    //Count games user is currently playing
    const playing = games.filter(
            (game) => game.status === "Playing"
    ).length;

    //Count games user has completed
    const completed = games.filter(
            (game) => game.status === "Completed"
    ).length;

    return (
        <section className="summary-cards">

            <article className="summary-card">
                <h3>Total Games</h3>
                <p>{totalGames}</p>
            </article>

            <article className="summary-card">
                <h3>Want to Play</h3>
                <p>{wantToPlay}</p>
            </article>

            <article className="summary-card">
                <h3>Playing</h3>
                <p>{playing}</p>
            </article>

            <article className="summary-card">
                <h3>Completed</h3>
                <p>{completed}</p>
            </article>

        </section>
    );
}

export default SummaryCards;