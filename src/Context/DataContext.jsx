import axios from "axios";
import { createContext } from "react";
import toast, { Toaster } from 'react-hot-toast';


export const Homecontext = createContext()
export const DataContext = (props) =>
{
    let getdata= async()=>
    {
         let res =  await axios.get('http://localhost:3001/Products')
         return res.data  
        
    }
    let getCart= async()=>
    {
         let res =  await axios.get('http://localhost:3001/Cart')
         return res.data  
        
    }
    let spefic_prodect= async(id)=>
    {   
        
         let res =  await axios.get(`http://localhost:3001/Products/${id}`)
         return res.data  
        
    }

    let prodect_quentity= async(id , data)=>
    {   
        
         let res =  await axios.put(`http://localhost:3001/Cart/${id}`,data)
         return res.data  
        
    }
    let Delete_Product= async(id)=>
    {   
        
         let res =  await axios.delete(`http://localhost:3001/Cart/${id}`)
         return res.data  
        
    }

    let AddtoCart= async(data)=>
    {   
        
     let res = await axios.get('http://localhost:3001/Cart');
     let items = res.data;
     let itemExists = items.some(item => item.id === data.id);

         if (itemExists)
          {
               toast("This item is already in the cart",
               {
                 icon: '🛒🎁',
                 style: {
                   borderRadius: '10px',
                   background: '#333',
                   margin:'5px 0px',
                   color: '#fff',
                 },
               }
             );
          return null;
          } 

        else 
        {
          toast("Added To Cart",
          {
            icon: '🛒🎁',
            style: {
              borderRadius: '10px',
              background: '#333',
              margin:'5px 0px',
              color: '#fff',
            },
          }
        );
          let res = await axios.post('http://localhost:3001/Cart', data);
          return res;
        }

         

    }




    return <Homecontext.Provider value={{Delete_Product,prodect_quentity,getdata,spefic_prodect,AddtoCart,getCart}}>

        {props.children}
    </Homecontext.Provider>
}