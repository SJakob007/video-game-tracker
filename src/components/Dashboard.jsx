import SummaryCards from "./SummaryCards";
import GameList from "./GameList";
import GameForm from "./GameForm";

//Dashboard Component: Displays the game totals, add-game form, and game list

function Dashboard({ games, onAddGame, onStatusChange, onRemoveGame }) {
    return (
        <main className="dashboard">
            <h2>My Game Backlog</h2>
            
            <p>
                Keep track of games you want to play,
                 are currently playing, and have completed.
            </p>

            <SummaryCards games={games} />

            <GameForm onAddGame={onAddGame} />

            <h2>My Games</h2>

            <GameList 
                games={games}
                onStatusChange={onStatusChange}
                onRemoveGame={onRemoveGame}
            />
        </main>
    );
}

export default Dashboard;