import SummaryCards from "./SummaryCards";
import GameList from "./GameList";

//Dashboard Component: Receives game array from App and passes to its children
function Dashboard({ games }) {
    return (
        <main className="dashboard">
            <h2>My Game Backlog</h2>
            
            <p>
                Keep track of games you want to play,
                 are currently playing, and have completed.
            </p>

            <SummaryCards games={games} />
            <GameList games={games} />
        </main>
    );
}

export default Dashboard;