import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Education from './education/Education.js';
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import Home from './components/Home.jsx';
import { Project } from './projects/Project.js';
import { Skills } from './skills/Skills.js';
import About from './about/About.js';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path={"/"} element = {<Home/>}/>
          <Route path={"/projects"} element = {<Project/>}/>
          <Route path={"/skills"} element = {<Skills/>}/>
          <Route path={"/education"} element = {<Education/>}/>
          <Route path={"/about"} element = {<About/>}/>
        </Routes>
        <div className='footerr'>
        <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
