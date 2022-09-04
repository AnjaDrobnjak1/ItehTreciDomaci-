import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeStrana from './stranice/HomeStrana';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeStrana />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
