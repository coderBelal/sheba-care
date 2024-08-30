import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Home/Home";
import Hospital from './Components/Hospital';
import HealthBlogs from './Components/HealthBlogs';
import Login from './Components/Login';
import FindDoctor from './Components/FindDoctor';
import About from './Components/About';
 
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/hospital' element={<Hospital/>}  />
          <Route path='/healthblog' element={<HealthBlogs/>} />
         <Route path='/create-account'  element={<Login/>}    />
         <Route path='/find-doctor'  element={<FindDoctor/>}   />
         <Route path='/about'  element={<About/>}  />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
