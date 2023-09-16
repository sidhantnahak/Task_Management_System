import React, { } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './home.css'
import { useSelector } from 'react-redux'

const Home = ({ setnote }) => {

    const { carts } = useSelector(state => state.allcarts)
    const navigate = useNavigate();

    const closeMenu = (e) => {
        e.preventDefault()
        let toogle_btn_icon = document.getElementById('bar');
        let elem = document.getElementById("sidebar2")
        elem.classList.toggle("open")
        const isOpen = elem.classList.contains('open');
        toogle_btn_icon.classList = isOpen ? "fa-solid fa-bars-staggered" : "fa-solid fa-bars"
    }


    const taskHandler = () => {
        let elem = document.getElementById("tasks");
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

        }
    }

    return (
        <>

            <nav >
                <Link to='/' >Ambula Technologies Private Ltd
                </Link>
                <div className="nav_links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <Link onClick={closeMenu} id='bar' className="fa-solid fa-bars" />

            </nav>

            <div id='sidebar' className='sidebar'>
                <Link to="/dashboard" onClick={() => { taskHandler(); navigate("/dashboard"); setnote("All Tasks") }}>Get All Tasks</Link>
                <Link to="/dashboard" onClick={() => setnote("To Do")}>To Do Tasks</Link>
                <Link to="/dashboard" onClick={() => setnote("Doing")}>Doing Tasks</Link>
                <Link to="/dashboard" onClick={() => setnote("Done")}>Done Tasks</Link>
                <Link to="/news"> Get News</Link>
                <Link to="/carts">My Cart <span>{carts && carts.length}</span></Link>
            </div>
            <div id='sidebar2' className="sidebar2">
                <ul>
                    <li><Link to="/dashboard" onClick={() => { taskHandler(); navigate('/dashboard'); setnote("All Tasks"); }} >Get All Tasks</Link></li>
                    <li><Link to="/dashboard" onClick={() => setnote("To Do")}>To Do Tasks</Link></li>
                    <li><Link to="/dashboard" onClick={() => setnote("Doing")} >Doing Tasks</Link></li>
                    <li><Link to="/dashboard" onClick={() => setnote("Done")} >Done Tasks</Link></li>
                   <li><Link to="/news" >Get News </Link></li> 
                     <li><Link to="/carts" >My Cart {carts && carts.length} </Link></li>






                </ul>
            </div>
            <div className="buttom_nav_links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </>
    )
}

export default Home