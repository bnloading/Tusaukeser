import "./App.css";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import CountTimer from "./components/CountTimer";
import Address from "./components/Address";
import Animations from "./components/Animations";

function App() {
  return (
    <>
      <div className="only-mobile-message">Тек Телефонмен ғана көре аласыз</div>
      <div className="App">
        <Animations />
        <Hero />
        <Gallery />
        <Address />
        <CountTimer />
      </div>
    </>
  );
}

export default App;
