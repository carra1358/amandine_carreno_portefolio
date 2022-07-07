import Header from './components/header/Header';
import './app.css';
import Bio from './components/bio/Bio';
import profilePic from "./assets/profile_pic.jpg"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Bio src={profilePic} />

      </main>
    </div>

  );
}

export default App;
