import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Adddessert from './pages/Adddessert';
import Details from './pages/Details';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about'element={<About/>}/>
        <Route path='adddessert'element={<Adddessert/>}/>
        <Route path='details/:id'element={<Details/>}/>

      </Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
