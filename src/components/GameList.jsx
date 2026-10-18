import GameCard from "./GameCard";

function GameList({ games }) {
    if (games.length === 0) {
        return <p>No games in your backlog yet!</p>;
    }

    return (
        <section className="game-list">
            {games.map((game) => (
                <GameCard
                    key={game.id}
                    game={game}
                />
            ))}
        </section>
    );
}

export default GameList;