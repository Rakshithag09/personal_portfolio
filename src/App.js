import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About  from "./components/About";
import Portfolio from "./components/Portifolio";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
