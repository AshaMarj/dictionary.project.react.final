import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> What's the Word of the Day? </header>
        <main>
          <Dictionary />
        </main>

        <footer className="text-center">
          Coded by Asha Marjani, {""}
          <a href="https://github.com/AshaMarj/dictionary.project.react.final">
            open-source code
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
