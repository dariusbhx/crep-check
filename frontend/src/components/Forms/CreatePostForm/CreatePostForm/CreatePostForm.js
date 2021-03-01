import React, { useSelector, useEffect } from 'react'
import FileBase from 'react-file-base64'
import { useGlobalContext } from '../../../../context'
import { createPost } from '../../../../actions/post'
import './CreatePostForm.css'
import { useDispatch } from 'react-redux'
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

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData( {...formData, [name]: value})
  }

  return (

    <div className="wrapper">
      <form action="" className="form-area" onSubmit={handleSubmit}>

        <div className="details-area">
          <label htmlFor="title">Title</label>
          <input type="text"  name ="title" label="title" id="title" value={formData.title} onChange = {handleChange} />

          <label htmlFor="price">Price</label>
          <input type="text" name = "price" label="price" id="price" value={formData.price} onChange = {handleChange} />

          <div className="desc-area">
            <label htmlFor="desc">Description</label>
            <textarea name="description" id="desc" label="desc" cols="15" rows="8" value={formData.description} onChange = {handleChange}></textarea>
          </div>

          <div className="img-file-container">
            <label htmlFor="image">Image</label>
            <FileBase
            className="image-input" id="image" type="file" multiple={false} label="image"
            value={formData.image} onDone ={({base64}) => setFormData({...formData, image: base64})}  />
          </div>
          <div className="btn-container">
            <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default CreatePostForm
