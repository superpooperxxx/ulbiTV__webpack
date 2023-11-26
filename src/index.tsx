import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);
