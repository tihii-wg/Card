import "./App.css";
import Avatar from "./components/avatar/Avatar";
import About from "./components/about/About";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
