import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import URLShortenerPage from './components/URLShortenerPage';
import StatisticsPage from './components/StatisticsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<URLShortenerPage />}/>
        <Route path="/Stats" element={<StatisticsPage/>}/>
      </Routes>
    </Router>
  );
}
  export default App;