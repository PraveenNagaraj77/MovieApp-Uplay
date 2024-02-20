import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbars from './Components/Navabars/Navbar';
import Main from './Components/Main';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Footer from './Footer';



function App() {

  return (
    <div className='container-fluid'>
      <Navbars />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movie/:id' element={<VideoPlayer />} />

      </Routes>
      <Footer/>



    </div>
  );
}

export default App;   
