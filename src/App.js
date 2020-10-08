import React from 'react';
import { HashRouter as Router , Route , Switch} from 'react-router-dom'
// import { Scroller, scrollInitalState } from 'ReactSkroll';
import './style.scss';
import './App.css';
import StartPage from './component/startPage'
import HomePage from './component/home'
// import NamePage from './component/name'
// import Sidebar from './component/sidebar'
import About from './component/about'
import Skill from './component/skill'
import Contact from './component/contact'
import Education from './component/education'
import Portfolio from './component/portfolio'


function App () {
  
  return(
    // fragment
    <> 
   
        {/* <StartPage /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={StartPage} />
            {/* <Route exact path="/home" component={NamePage} /> */}
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/skill" component={Skill} />
            <Route exact path="/port" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>

    </>
    // fragment
  )
}

export default App;
