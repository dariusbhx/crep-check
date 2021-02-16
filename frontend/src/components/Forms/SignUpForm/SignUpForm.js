import React from 'react'
import FileBase from 'react-file-base64'

import './SignUpForm.css'
const SignUpForm = () => {
   
  

    return (
 
        <div className="wrapper">
         <form action="" className="form-area">
          
           <div className="details-area">
             <label htmlFor="title">Title</label>
             <input type="text" id ="title"/>

             <label htmlFor="price">Price</label>
             <input type="text" id ="price"/>
             <div className="desc-area">
              <label htmlFor="desc">Description</label>
              <textarea name="" id="desc" cols="15" rows="8"></textarea>
             </div>
             <div>
                <label htmlFor="image">Image</label>
                <FileBase className ="image-input" id = "image" type ="file" multiple = {false}  />
             </div>
            
           </div>
         </form>
        </div>
    )
}

export default SignUpForm