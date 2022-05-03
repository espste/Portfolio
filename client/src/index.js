import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './components/Context/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <DataProvider>
      <App />
    </DataProvider>
  </Router>
);