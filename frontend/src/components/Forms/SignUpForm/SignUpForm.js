import React from 'react'
import FileBase from 'react-file-base64'

import './SignUpForm.css'
const SignUpForm = () => {
   
  

    return (
 
        <div className="wrapper">
         <form action="" className="form-area">
          
           <div className="details-area">
             <div className ="name-container">
              <label htmlFor="first-name">First name</label>
              <input type="text" id ="first-name"/>
              <label htmlFor="last-name">Last name</label>
              <input type="text" id  ="last-name"/>
             </div>
             

             <label htmlFor="price">Price</label>
             <input type="text" id ="price"/>
             
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
