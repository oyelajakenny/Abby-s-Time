import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Abbys logo.png"

export const Header = () => {
  return (
    <div className='header'>

<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <div className='logo'>  <Link class="nav-link active" aria-current="page" to= '/'>  <a class="navbar-brand" href="#"><img src={logo} alt='abbys'></img></a></Link>
</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex gap-3">
        <Link class="nav-link active" aria-current="page" to= '/'>Home</Link>
        <Link class="nav-link" to='/about'>About Abby</Link>
        <Link class="nav-link" to="/contact">Contact Abby</Link>
        <Link class="nav-link btn talkbtn rounded-pill" id = 'talkbtn' to="/booking">Talk to Abby</Link>
        <a class="nav-link aby-btn text-white" href="#">Abby and Friends</a>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}
