import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/index.scss';

import { HomeAsync } from './pages/Home/Home.async';
import { AboutAsync } from './pages/About/About.async';
import { Navigation } from './components/Navigation';
import { useTheme } from './hooks/useTheme';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navigation />

      <button type='button' onClick={toggleTheme}>TOGGLE THEME</button>

      <Suspense fallback={<div>Loading Home Page...</div>}>
        <Routes>
            <Route
              path="/"
              element={<HomeAsync />}
            />

            <Route
              path="/about"
              element={<AboutAsync />}
            />
        </Routes>
      </Suspense>
    </div>
  )
}
