import React, { useContext, useEffect, useState } from 'react'
import { Homecontext } from '../../Context/DataContext'
import Swal from 'sweetalert2';

const Cart = () =>
{

  let [ress ,setres] = useState([])
 let {getCart ,prodect_quentity ,Delete_Product} = useContext(Homecontext)

 let data= async()=>
 {
   let res =  await getCart()
   setres(res)
   console.log(res);
 }


 let delitem= async(id)=>
 {
   let res =  await Delete_Product(id)
   console.log(res);
   data()
 }

 let Update_QU= async(id , qs, item)=>
 {
  
    item.Quentity = qs
    let res =  await prodect_quentity(id ,item)
    console.log(res);
    data()
 }


 useEffect(()=>
  {
    data()
  },[])

  return <>
    <div className="container mt-5">
      <div className="col-md-12">
      <div className='container mt-free '>
    <h3 className='w-100 text-center'>Shopping cart </h3>
    <hr />
    <div className='row responsivetable px-2'>
      <div className='col-md-2'>
          <h3>Product</h3>
      </div>
      <div className='col-md-2 '>
           <h4 >Name</h4>
      </div>
      <div className='col-md-2 '>
            <h3>Quantity</h3>
      </div>
      <div className='col-md-2 '>
            <h3>Price</h3>
      </div>
      <div className='col-md-2 '>
            <h3>Total</h3>
      </div>
      <div className='col-md-2 '>
            <h3 className='text-danger'>Remove</h3>
      </div>
    </div>
      </div>

         
        {ress?.map((item)=>
        {
          return <div className='imgcartrespoinse row border bg-dark p-2 rounded-4 mt-3 align-items-center'>
          <div className="col-md-2  my-3">
            <img className='w-100 ' src={item.imgsrc} alt="" />
          </div>
          
          <div className='col-md-2 '>
              <h5 className='lighty fw-bolder fonntresponsive'>{item.title}</h5>
          </div>
          <div className='col-md-2 d-flex justify-content-center align-items-center'>
            <button onClick={()=>
              {
                
                Update_QU(item.id,  ++item.Quentity , item)
              }} className=" fonntresponsivebtn btn btn-outline-info fw-bold  rounded me-3 ">+</button>
            <span className='lighty h4'> {item.Quentity} </span>
            <button disabled={item.Quentity > 1 ? false : true } onClick={()=>
              {
             
                Update_QU(item.id,  --item.Quentity , item)
              }} className="fonntresponsivebtn btn btn-outline-info fw-bold  rounded ms-3 ">-</button>
          </div>
          <div className='col-md-2 fonntresponsiveparent'>
              <span className='fonntresponsive   lighty h5 fw-bolder'>{item.Price} $ </span>
          </div>
          <div className='col-md-2 fonntresponsiveparent'>
              <span className='fonntresponsive lighty h5 fw-bolder'>{item.Price * item.Quentity} $ </span>
          </div>
          <div className='col-md-2'>
          <button  onClick={()=>{
            
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              background: '#303030',
              color: '#ffffff',
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                delitem(item.id)
                Swal.fire({
                  background: '#303030',
                  color: '#ffffff',
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                
              }
            });
            }} className='fonntresponsivebtn bg-transparent px-3 py-2'>  <i className="fa-lg lighty fa-solid fa-trash-can"></i></button>
          </div>
          
      </div>
  
  
        })}
    









    </div>
    
    </div>

   








  </>
}

export default Cart
