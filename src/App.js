import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Projectshot from './components/Projectshot';
import Viewexpcertificate from './components/Viewexpcertificate';
import ViewCertificate from './components/ViewCertificate';

function App() {
  return (
      <div className="portfolio-container">
         
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Portfolio/>}/>
    <Route path='projectshots/:title' element={<Projectshot/>}/>
     <Route path='viewexpcertificate/:id' element={<Viewexpcertificate/>}/>
      <Route path='viewcertificate/:certid' element={<ViewCertificate/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
