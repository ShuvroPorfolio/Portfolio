import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/intro";
import Aboutme from "./components/Aboutme/aboutme";
import Sectioncard from "./components/Sectioncard/sectioncard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Aboutme />
      <Sectioncard />
    </div>
  );
}

export default App;
