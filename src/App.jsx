import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; // Import Home component
import Software from './pages/Software'; // Import Software component
import Data from './pages/Data'; // Import Software component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Software" element={<Software />} />
        <Route path="/Data" element={<Data />} />
      </Routes>
    </Router>
  );
}

export default App;
