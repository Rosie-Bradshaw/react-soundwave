import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { GlobalStyles } from './Global.styles';
import { Navbar, Discover, Footer, Hero, Join, Layout } from './containers';


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/discover" element={<Discover />}/>
          <Route path="/join" element={<Join />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
