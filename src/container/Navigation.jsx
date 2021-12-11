import React from 'react';
import Bookshelf from '../illustrations/Bookshelf';
import Lamp from '../illustrations/Lamp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Router>
        <Link className='lamp-link' to="/lamp">Lamp</Link>
        <Link className='bookshelf-link' to="/bookshelf">Bookshelf</Link>
        <Routes>
          <Route path="/lamp" element={<Lamp />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Navigation;
