import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Homecontext } from '../../Context/DataContext'
import toast, { Toaster } from 'react-hot-toast';
const ProdectDetails = (props) => 
{
    let {spefic_prodect,AddtoCart} = useContext(Homecontext)
    let {id} = useParams()
    let [ress ,setres] = useState([])
  
    let getprodect = async ()=>
    {
        let res = await spefic_prodect(id)
        setres(res)
       
    }

    let Addprodect= async(prodectid)=>
    {
      let res =  await AddtoCart(prodectid)
      console.log(res);
    }
 
    useEffect(()=>
    {
        getprodect()
    },[])

  return <>
    <div className='container'>
     <div className="col-md-5 offset-4 mt-5">
     <img className='' src={ress.imgsrc} alt="" />
      <h4 className='mt-3'>{ress.title}</h4>
      <button onClick={()=>
        {
         Addprodect({"id":ress.id,"imgsrc":ress.imgsrc,"title":ress.title.split(' ').slice(0, 3).join(' '),"Price":ress.price,"Quentity":1 })
        }} className='btn btn-dark px-3 py-2 w-100 my-3'>Add To Cart</button>
     </div>
    </div>
    <Toaster />
  </> 
}

export default ProdectDetails
