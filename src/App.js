import React from 'react'
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import {Switch,Route,useLocation} from 'react-router-dom'
import Nav from './components/Nav';
import MovieDetail from './pages/MovieDetail';
import { AnimatePresence } from 'framer-motion';
import ScrollTop from './components/ScrollTop';


function App() {

  const location=useLocation();

  return (
    <div className="App">
      <GlobalStyle/>
      
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Switch Location={location} key={location.pathname}>    
          <Route path="/" exact>
      <AboutUs/>
      </Route>
      <Route path="/contactus">
      <ContactUs/>
      </Route>
      <Route path="/work" exact>
      <OurWork/>
      </Route>
      <Route path="/work/:id">
        <MovieDetail/>
      </Route>
      </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;
