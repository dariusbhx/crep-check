import React,{useSelector,useEffect} from 'react'
import FileBase from 'react-file-base64'
import {useGlobalContext} from '../../../../context'
import {createPost} from '../../../../actions/post'
import './CreatePostForm.css'
import {useDispatch} from 'react-redux'
const CreatePostForm = () => {
    
    
    const {
           setFormData,
           formData,
           currentId,
           setCurrentId
           } = useGlobalContext();
   

    const dispatch = useDispatch();

   
    const clear = () => {
      setCurrentId(null)
      setFormData({
        title: '',
        description: '',
        image: '',
        price: '',
      })
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createPost(formData));
      clear();
    };

     return (
 
        <div className="wrapper">
         <form action="" className="form-area" onSubmit ={handleSubmit}>
          
           <div className="details-area">
             <label htmlFor="title">Title</label>
             <input type="text" label ="title" id ="title" value ={formData.title} onChange ={(e) => setFormData({...formData, title: e.target.value})}/>

             <label htmlFor="price">Price</label>
             <input type="text" label ="price" id ="price" value ={formData.price} onChange ={(e) => setFormData({...formData, price: e.target.value})}/>

             <div className="desc-area">
              <label htmlFor="desc">Description</label>
              <textarea name="" id="desc" label ="desc" cols="15" rows="8" value ={formData.description} onChange ={(e) => setFormData({...formData, description: e.target.value})}></textarea>
             </div>
             
             <div className ="img-file-container">
              <label htmlFor="image">Image</label>
              <FileBase 
              className ="image-input" id = "image" type ="file" multiple = {false} label ="title"
              value ={formData.image} onChange ={(e) => setFormData({...formData, image: e.target.value})}  />  
            </div>
            <div className ="btn-container">
              <button type="submit" className ="submit-btn" onClick ={handleSubmit}>Submit</button>
            </div>
             
           </div>
         </form>
        </div>
    )
}

export default CreatePostForm
