import './App.css';
import Lobby from './components/lobby';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile';  // Fix typo here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App  pb-[50px]">
        <Navbar />
        <div className=''>
          <Routes>
            <Route path='/' element={<Lobby />} />
            <Route path='/profile' element={<Profile />} /> {/* Fix path here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
