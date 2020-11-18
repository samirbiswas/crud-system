import React from 'react';
import { useForm } from 'react-hook-form';
import './AddUserForm.css'
const AddUserForm = () => {

    const { register, handleSubmit } = useForm();



    const onSubmit = (data) => {
        // const details = {...data};
        // fetch('https://fast-temple-74960.herokuapp.com/addData',{
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json',
        //                 'Accept': 'application/json' },
        //     body: JSON.stringify(details)
            
        // })
        // .then(res=>res.json())
        // .then(result=>{
        //  if(result){
        //      alert("data send Successfully");
        //  }
          
        // })
        console.log(data)
      };

    // const upload = (e) => {
    //     uploadImage(e.target.files[0])
    //         .then(resp => {
    //             // console.log(resp.data.data.thumb.url) // I'm aware it's data.data, that is how it returns stuff
    //             const newObject = { ...orderInfo }
    //             newObject.imageUrl = resp.data.data.thumb.url;
    //             setOrderInfo(newObject);
    //         })
    //     e.preventDefault();
    // }
    return (
    <div className='container mt-4'>
            
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="country">Product Name</label>
                <br/>
                    <input id="inputName" name="name" placeholder='Enter Product Name' className="form-control" ref={register({ required: true })}/>
                <br/>
                <div className="col-25">
                    <label htmlFor="country">Select Size</label>
                        </div>
                            <div className="col-75">
                                <select id="country" name="product-size" ref={register({ required: true })}>
                                    <option value="small">SM</option>
                                    <option value="big">XL</option>
                                    <option value="medium">MD</option>
                                </select>
                            </div>
                
                <br/>
                    <input id="file" type='file' name="file" placeholder="upload file" className="form-control-file" ref={register({ required: true })}/>
                <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    );
};

export default AddUserForm;