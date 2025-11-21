import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Projectshot from './components/Projectshot';

function App() {
  return (
      <div className="portfolio-container">
          <link 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
            rel="stylesheet"
          />
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Portfolio/>}/>
    <Route path='projectshots/:title' element={<Projectshot/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
