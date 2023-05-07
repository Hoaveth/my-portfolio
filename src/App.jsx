import About from "./components/About";
import Contact from "./components/Contact";
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
        <Contact />
      </div>
    </>
  );
}

export default App;
