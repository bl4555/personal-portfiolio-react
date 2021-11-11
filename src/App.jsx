import "./App.scss";
import "./global.scss"
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
