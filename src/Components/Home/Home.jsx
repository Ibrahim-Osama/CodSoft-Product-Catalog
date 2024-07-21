import React, { useContext, useEffect, useState } from 'react'
import { Homecontext } from '../../Context/DataContext'
import { useNavigate } from 'react-router-dom'

import toast, { Toaster } from 'react-hot-toast';


const Home = () =>
{


  const navigate= useNavigate()
  let [ress ,setres] = useState([])
 let {getdata ,AddtoCart} = useContext(Homecontext)

  let data= async()=>
  {
    let res =  await getdata()
    setres(res)
    console.log(res);
  }
  let Addprodect= async(prodectid)=>
  {
    let res =  await AddtoCart(prodectid)
    console.log(res);
  }

  useEffect(()=>
  {
    data()
  },[])
  return<>
<div className="container">
  <div className="row">
     {ress?.map((item)=>
  {return <div className='col-md-3'>
    <div key={item.id} className="card cardstyle" style={{width: "18rem;"}}>
  <img onClick={()=>
    {
      navigate(`ProdectDetails/${item.id}`)
    }} src={item.imgsrc} className="card-img-top imgst " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title.split(' ').slice(0, 3).join(' ')}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h5>{item.price}$</h5>
    <button onClick={()=>
      {
        Addprodect({"id":item.id,"imgsrc":item.imgsrc,"title":item.title.split(' ').slice(0, 3).join(' '),"Price":item.price,"Quentity":1 })
        
      }} className='btn btn-dark px-3 py-2 w-100 '>Add To Cart</button>
  </div>
</div>
  </div>
  })}
  </div>
</div>

 
  
      <Toaster />
  </>
}

export default Home
