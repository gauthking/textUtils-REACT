import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar />
      {/* container is a bootstrap utility class */}
      <div className="container my-3">  
        <Textform heading = "Enter the text to Analyze" />
      </div>
    </>
  );
}

export default App;
