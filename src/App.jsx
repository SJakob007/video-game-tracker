import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import "./app.css";

function App() {
    const [currentView, setCurrentView] = useState("dashboard");

    return (
        <div className="app">
            <Header
                currentView={currentView}
                onChangeView={setCurrentView}
            />

            {currentView === "dashboard" ? (
                <Dashboard />
            ) : (
                <About />
            )}
        </div>
    );
}

export default App;