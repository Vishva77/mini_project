import './App.css';
import {Header} from "./components/Header.js";
import {Footer} from "./components/Footer.js";
import { Skills } from './components/Skills.js';

function App() {
  return (
    <div>
      <div className="App">
      <Header/>
      <div className='home'>
        <h1>Hai I am VISHVA </h1>
        <br/>
        <br/>
        <br/>
        <h3>I am a Web Developer</h3>
      </div>
      <Skills/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
