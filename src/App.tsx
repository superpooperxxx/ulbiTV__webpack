import { Route, Routes } from 'react-router-dom';

import './index.scss';
import { HomeAsync } from './pages/Home/Home.async';
import { AboutAsync } from './pages/About/About.async';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

export const App = () => {
  return (
    <div className='app'>
      <nav style={{ marginBottom: '20px'}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading Home Page...</div>}>
                <HomeAsync />
              </Suspense>
            }
          />

          <Route
            path="/about"
            element={
              <Suspense fallback={<div style={{ background: 'red'}}>Loading About Page...</div>}>
                <AboutAsync />
              </Suspense>
            }
          />
      </Routes>
    </div>
  )
}
