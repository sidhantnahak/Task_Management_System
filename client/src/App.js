import './App.css';
import { Routes, Route,  BrowserRouter } from 'react-router-dom'
import Home from './Components/Main/Home';
import Notfound from './Components/Loader&Notfound/Notfound';
import { useEffect, useState } from 'react';
import { getall_carts, getall_news, getall_task } from './redux/taskAction';
import { useDispatch } from 'react-redux';
import { Main } from './Components/Main/Main';
import News from './Components/Main/News';
import Carts from './Components/Main/Carts';
import Intro from './Components/HomePages/Intro';
import About from './Components/HomePages/About';
import Contact from './Components/HomePages/Contact';

function App() {
  const [note, setnote] = useState("All Tasks")

const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getall_task())
    dispatch(getall_news())
    dispatch(getall_carts())

  }, [dispatch])


  return (
    <>
      <BrowserRouter>
      <Home setnote={setnote}/>
        <Routes>
          
        <Route  path='/' element={<Intro/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/contact' element={<Contact/>} />
          
          <Route  path='/dashboard' element={<Main note={note}/>} />
          <Route  path='/news' element={<News/>} />
          <Route  path='/carts' element={<Carts/>} />

          <Route path='*' element={<Notfound />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}
// DB_URI=mongodb://localhost:27017/Database1
export default App;
