function Header({ currentView, onChangeView }) {
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
            </nav>
        </header>
    );
}

export default Header;