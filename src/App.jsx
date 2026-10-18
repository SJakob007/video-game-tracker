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
    console.error("Could not load saved games:". error);
    return initialGames; 
  }
}

//Parent Component; manages current view and saved game list
function App() {
  //Load saved games when state is first initialized
  const [games, setGames] = useState(loadSavedGames);
  //Remember which view is currently displayed
  const [currentView, setCurrentView] = useState("dashboard");


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

  return (
    <div className="app">
      <Header
          currentView={currentView}
          onChangeView={setCurrentView}
      />

      {currentView === "dashboard" ? (
        <Dashboard games={games} />
      ) : (
        <About />
      )}
    </div>
  );
}

export default App;