import React from 'react'
import Sstpl from './L&T_transparent.jpg'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-Info bg-Info">
            <div class="container-fluid" style={{marginTop:"-5vh", marginBottom:"-2vh"}}>
                {/* <a class="navbar-brand">Navbar</a> */}
                <img src={Sstpl} width={400} height={170} alt={"SSTPL"} />

                <form class="d-flex">
                {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button> */}
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Navbar