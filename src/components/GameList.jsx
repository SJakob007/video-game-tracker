import GameCard from "./GameCard";

/* GameList Component: Receives game array and displays a card for each */

function GameList({ games, onStatusChange, onRemoveGame }) {
    if (games.length === 0) {
        return <p>No games in your backlog yet. Add one above!</p>;
    }

    return (
        <section className="game-list">
            {games.map((game) => (
                <GameCard
                    key={game.id}
                    game={game}
                    onStatusChange={onStatusChange}
                    onRemoveGame={onRemoveGame}
                    />
            ))}
        </section>
    );
}

export default GameList;