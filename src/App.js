import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/intro";
import Aboutme from "./components/Aboutme/aboutme";
import Sectioncard from "./components/Sectioncard/sectioncard";
import Clients from "./components/Clients/clients";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Aboutme />
      <Sectioncard />
      <Clients />
    </div>
  );
}

export default App;
