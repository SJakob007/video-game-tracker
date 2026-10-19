import { useState, useEffect } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import "./app.css";

// Import starter data when no saved list exists
const initialGames = [
    { id: 1, title: "Minecraft", status: "Playing" },
    { id: 2, title: "ARC Raiders", status: "Want to Play" },
    { id: 3, title: "Amnesia: The Bunker", status: "Completed" },
    { id: 4, title: "Hollow Knight", status: "Completed" },
    { id: 5, title: "Elden Ring", status: "Want to Play" },
    { id: 6, title: "Stardew Valley", status: "Playing" },
    { id: 7, title: "Plants vs. Zombies", status: "Completed"}
];

//Load saved games when React initializes this state, using starter array if nothing is saved
function loadSavedGames() {
  try {
    const savedGames = localStorage.getItem("videoGameBacklog");

    //Use starter data if no saved list exists
    if (savedGames === null) {
      return initialGames;
    }

    //Convert saved text back into JavaScript array
    const parsedGames = JSON.parse(savedGames);

    //Make sure saved data is an array before using it
    if (Array.isArray(parsedGames)) {
      return parsedGames;
    }

    return initialGames;
  } catch (error) {
    //Fall back to starter data if saved data cannot be read
    console.error("Could not load saved games:", error);
    return initialGames; 
  }
}

//Parent Component; manages current view and saved game list
function App() {
  //Load saved games when state is first initialized
  const [games, setGames] = useState(loadSavedGames);
  //Remember which view is currently displayed
  const [currentView, setCurrentView] = useState("dashboard");
  //Load in light theme by default
  const [theme, setTheme] = useState("light");

  //Save game array when changes are made, effect also runs after initial render.
  useEffect(() => {
    try {
      //Convert array into text and store it in browser
      localStorage.setItem("videoGameBacklog", JSON.stringify(games));
    } catch (error) {
      //Report storage problem instead of crashing the app
      console.error("Could not save games:", error);
    }
  }, [games]);

  //Add a new game to the game array
  function handleAddGame(title) {
    const newGame = {
        id: Date.now(),
        title: title,
        status: "Want to Play"
    };

    setGames((previousGames) => [
        ...previousGames,
        newGame
    ]);
  }

  //Update status of the game with matching ID
  function handleStatusChange(gameId, newStatus) {
    setGames((previousGames) => 
        previousGames.map((game) => 
            game.id === gameId
                ? {...game, status: newStatus }
              : game
            )
        );
  }

  //Remove game that matches selected ID and ask for confirmation before removing a game.
    function handleRemoveGame(gameId) {
        // Find the game the user selected.
        const gameToRemove = games.find((game) => game.id === gameId);

        // Stop if the game could not be found.
        if (!gameToRemove) {
            return;
        }

        // Ask the user to confirm the removal.
        const confirmed = window.confirm(
            `Are you sure you want to remove "${gameToRemove.title}" from your backlog?`
        );

        // Keep the game if the user cancels.
        if (!confirmed) {
            return;
        }

        // Remove the game after confirmation.
        setGames((previousGames) =>
            previousGames.filter((game) => game.id !== gameId)
        );
    }

  return (
    <div className={`app ${theme}-theme`}>
            <Header
                currentView={currentView}
                onChangeView={setCurrentView}
                theme={theme}
                onToggleTheme={() =>
                    setTheme((previousTheme) =>
                        previousTheme === "light" ? "dark" : "light"
                    )
                }
            />

      {currentView === "dashboard" ? (
        <Dashboard 
            games={games}
            onAddGame={handleAddGame}
            onStatusChange={handleStatusChange}
            onRemoveGame={handleRemoveGame}
        />
      ) : (
        <About />
      )}
    </div>
  );
}

export default App;