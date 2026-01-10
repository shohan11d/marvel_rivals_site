import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar/>
      <Hero />
      <About/>
      <Features/>
      <Contact/>    
      <Footer/>
    </>
  );
}

export default App;
