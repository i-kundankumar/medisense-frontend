import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Layout from './components/Layout';
import Features from './pages/features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default page → Login */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/About' element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
        

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />
        <Route path='/Login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
