/* Header Component: Displays application title, navigation, and theme toggle */

function Header({ currentView, onChangeView, theme, onToggleTheme }) {
    return (
        <header className="app-header">
            <h1>Video Game Backlog</h1>

            <nav aria-label="Main navigation">
                <button
                    className={currentView === "dashboard" ? "active" : ""}
                    onClick={() => onChangeView("dashboard")}
                >
                    Dashboard
                </button>

                <button
                    className={currentView === "about" ? "active" : ""}
                    onClick={() => onChangeView("about")}
                >
                    About
                </button>

                <button onClick={onToggleTheme}>
                    Switch to {theme === "light" ? "Dark" : "Light"} Mode
                </button>
            </nav>
        </header>
    );
}

export default Header;