import Header from './components/Header'
import Home from './components/Home';
import {useState} from 'react'

import './App.css';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [project, setProject] = useState(false)
  const [skill, setSkill] = useState(false)
  return (
    <div className="App">
      <Header />
      <Home setProject={setProject} setSkill={setSkill} />
      { project ? <Projects/> : null}
      { skill ? <Skills/> : null}
    </div>
  );
}

export default App;
