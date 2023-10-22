import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Skills/Projects/Projects";
 
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
     
      <Footer></Footer>
    </div>
  );
}

export default App;
