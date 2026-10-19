/* GameCard Component: Displays one game's title and lets user update its status
The game and onStatusChange function come from the parent */

function GameCard({ game, onStatusChange }) {
    return (
        <article className="game-card">
            <h3>{game.title}</h3>

            <p className="game-status">{game.status}</p>

            <label htmlFor={'status-${game.id}'}>
                Change Status
            </label>

            <select
                id={'status-${game.id}'}
                value={game.status}
                onChange={(event) =>
                    onStatusChange(game.id, event.target.value)
                }
            >
                <option value="Want to Play">Want to Play</option>
                <option value="Playing">Playing</option>
                <option value="Completed">Completed</option>
            </select>
        </article>
    );
}

export default GameCard;