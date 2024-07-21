import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Homecontext } from '../../Context/DataContext'

const Nav = () =>
{

  let [ress ,setres] = useState([])
  let {getCart} = useContext(Homecontext)
  let data= async()=>
  {
    let res =  await getCart()
    setres(res)
    console.log(res.length);
  }
    
  useEffect(()=>
  {
    data()
  },[data])
  return <>
  <header className='container mt-3'>
  <nav class="navbar navbar-dark  navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="">Camera-Store</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Cart">Cart</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Cart">
          <div className='position-relative'>
              <i className="text-info fa-solid fa-cart-shopping"></i>
              <span className=' position-absolute top-0 start-100 translate-middle badge rounded-5 bg-success'>
              {ress.length == 0 ? null :ress.length}
              </span>
  
              </div>
          </Link>
        </li>
      
     
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </header>
  <Outlet/>
  
  
  </>
  
}


export default Nav
