import React, { useEffect, useState } from 'react';




const ManageData = () => {
  const [order, setOrder]= useState([]);
  const [updateProduct, setUpdateProduct]= useState({});

  
// product show on ui

  useEffect(()=>{
    
    fetch('https://limitless-reaches-25473.herokuapp.com/productShow')
    .then(res=>res.json())
    .then(data=>
      setOrder(data))
 
}, [])

// product load for updata data

const loadProduct = (event,id)=>{
  console.log("id",id)
  
  fetch(`https://limitless-reaches-25473.herokuapp.com/product/${id}`)
    .then(res => res.json())
    .then(data=> {
      setUpdateProduct(data)
     
      
    }
      
  )
   
}

// delete product from ui

const deleteProduct = (event,id)=>{
  //console.log("clicked", id)
  var a = event.target.parentNode;
  fetch(`https://limitless-reaches-25473.herokuapp.com/delete/${id}`,{
      method:'DELETE'

  } )
  .then(res=>res.json())
  .then(result=>{
      if(result && a){
       a.style.display='none';

      }
  })
  
}


    return (
        <div className='container mt-4'>
            <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      
      <th scope="col">Product Size</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  { order.map( or=>
                   <tr>
                       <th >{or.name}</th>
                       <td>{or.details}</td>
                       <td>
                        {
                          <img style={{height:'50px'}} src={or.image} alt=""/>
                        }

                       </td>
                       <button className='btn btn-success' onClick={(event)=>{loadProduct(event,`${or._id}`)}} >Update</button>
                       <button className='btn btn-danger' onClick={(event)=>{deleteProduct(event,`${or._id}`)}} >Delete</button>
                       
                   </tr>
                  
                   )}
   
  </tbody>
</table>
                      <h3>Update Data</h3>
                      


                      
        </div>
    );
};

export default ManageData;