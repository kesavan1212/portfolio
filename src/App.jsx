// src/App.jsx

import './App.css';
import Header from './component/Header.jsx';
import Hero from './component/hero.jsx';
import About from './component/about.jsx';
import Projects from './component/projects.jsx';
import Resume from './component/resume.jsx';
import Contact from './component/contact.jsx';
import Footer from './component/footer.jsx';
function App() {
  return (
    <div>
     <Header/>
     <Hero/>
     <About/>
     <Projects/>
     <Resume/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;


