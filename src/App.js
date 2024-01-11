import './App.css';
import Blog from './Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/*' element={<Blog />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
