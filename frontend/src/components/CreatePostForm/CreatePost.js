import React from 'react'
import FileBase from 'react-file-base64'
import {useGlobalContext} from '../../context'
import './CreatePost.css'

const CreatePost = () => {
    const {title,description,image,price,setFormData,formData} = useGlobalContext()
     return (
 
        <div className="wrapper">
         <form action="" className="form-area">
          
           <div className="details-area">
             <label htmlFor="title">Title</label>
             <input type="text" id ="title" value ={title} onChange ={(e) => setFormData({...formData, title: e.target.value})}/>

             <label htmlFor="price">price</label>
             <input type="text" id ="price" value ={price} onChange ={(e) => setFormData({...formData, price: e.target.value})}/>

             <div className="desc-area">
              <label htmlFor="desc">Description</label>
              <textarea name="" id="desc" cols="15" rows="8" value ={description} onChange ={(e) => setFormData({...formData, description: e.target.value})}></textarea>
             </div>
             
             <label htmlFor="image">Image</label>
             <FileBase 
             className ="image-input" id = "image" type ="file" multiple = {false}
             value ={image} onChange ={(e) => setFormData({...formData, image: e.target.value})}  />
           </div>
         </form>
        </div>
    )
}

export default CreatePost
