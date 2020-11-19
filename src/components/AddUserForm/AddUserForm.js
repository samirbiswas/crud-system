import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './AddUserForm.css'


const AddUserForm = () => {
    
    const [imgFile, setImgFile]=useState()

    const { register,handleSubmit} = useForm();
    const handelUpload=(e)=>{

        //console.log("upload", e.target.files[0])
        setImgFile(e.target.files[0])
    }

    const onSubmit = data => {


        console.log(data)
         const image = data.img[0];
        let imgUrl;
        let sendObject;
       
        let body= new FormData();
        body.set('key', '994f313582445f0bb4434c8cda32a43a')
        body.append('image', image)
          fetch("https://api.imgbb.com/1/upload?key=994f313582445f0bb4434c8cda32a43a",{
            method: 'POST',
            body: body
         })
        .then(res=>res.json()
        .then(img=>{
            //console.log(img)
            imgUrl =img.data.display_url;
            if(imgUrl != null){
                sendObject={name: data.productName,details: data.productSize, image : imgUrl}
                //console.log(sendObject)
                fetch('https://limitless-reaches-25473.herokuapp.com/productStore',{
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json',
                                'Accept': 'application/json' },
                    body: JSON.stringify(sendObject)
                })
                .then(res=>res.json())
                .then(data=>{
                    
                    data? alert("Service added"): console.log(data)  
                })

            }
            
             
           
        }))
        
    }
    return (
    <div className='container mt-4'>
            
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="country">Product Name</label>
                <br/>
                    <input  id="inputName" name="productName" placeholder='Enter Product Name' className="form-control" ref={register({ required: true })} />
                <br/>
                <div className="col-25">
                    <label htmlFor="country">Select Size</label>
                        </div>
                            <div className="col-75">
                                <select id="country" name="productSize" ref={register} >
                                    <option value="small">SM</option>
                                    <option value="big">XL</option>
                                    <option value="medium">MD</option>
                                </select>
                            </div>
                
                <br/>
                <input type="file" name="img"  onChange={handelUpload} ref={register} />
                <br/>
                <input type="submit"className="btn btn-primary"/>  
            </form>
        </div>
    </div>
    );
};

export default AddUserForm;