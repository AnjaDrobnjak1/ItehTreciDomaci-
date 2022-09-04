import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeStrana from './stranice/HomeStrana';
import PregledStrana from './stranice/PregledStrana';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeStrana />} />
          <Route path="pregled" element={<PregledStrana />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
