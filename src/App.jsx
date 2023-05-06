import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col  justify-evenly">
        <Home />
        <About />
        <Portfolio />
        <Technologies />
        <SocialLinks />
      </div>
    </>
  );
}

export default App;
