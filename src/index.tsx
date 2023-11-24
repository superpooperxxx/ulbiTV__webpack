import { createRoot } from 'react-dom/client';
import { Counter } from './components/Counter';

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';

const root = createRoot(document.getElementById('root'));
root.render(<Counter />);
