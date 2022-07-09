import Header from './components/header/Header';
import { data } from "./data/data"
import './app.css';
import Bio from './components/bio/Bio';
import profilePic from "./assets/profile_pic.jpg"
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Bio src={profilePic} />
        <Main data={data} />
      </main>
    </div>

  );
}

export default App;
