function GameCard({ game }) {
    return (
        <article className="game-card">
            <h3>{game.title}</h3>

            <p className="game-status">
                {game.status}
            </p>
        </article>
    );
}

export default GameCard;