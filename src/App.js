import './App.css';

import React from 'react'
import NavBar from './Documents/NavBar';
import NewsComponent from './Documents/NewsComponent';

import {
  BrowserRouter as 
  Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  // apiKey = process.env.REACT_APP_NEWS_API_KEY;

  return(
    <div>
      <Router>

        <NavBar/>

        {/* In the element{ } here key is needed otherwise the path may changes but the site will not get updated to the desired path*/}
        <Routes>
          <Route exact path="/" element={<NewsComponent apiKey="b36e8e203bb746bf96850c78443e3ade"  key="general" category="general"/>}>
          </Route>

          <Route exact path="/Sports" element={<NewsComponent apiKey="b36e8e203bb746bf96850c78443e3ade"  key="sports" category="sports" title="Sports"/>}> 
          </Route>

          <Route exact path="/Entertainment" element={<NewsComponent apiKey="b36e8e203bb746bf96850c78443e3ade"  key="entertainment" category="entertainment" title="Entertainment" />}>
          </Route>

          <Route exact path="/Business" element={<NewsComponent apiKey="b36e8e203bb746bf96850c78443e3ade"  key="business" category="business" title="Business"/>}> 
          </Route>

          <Route exact path="/Technology" element={<NewsComponent apiKey="b36e8e203bb746bf96850c78443e3ade"  key="technology" category="technology" title="Technology"/>}>
          </Route>

        </Routes>

      </Router>
    </div>
  )
}

export default App;
