import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const AddRestaurant = () => {

const initialState = {
    name: '',
    location: '',
    cuisine: ''
}

const navigate = useNavigate()
const [formData, setFormData] = useState(initialState)

const handleChange = (e) =>{
    setFormData({...formData, [e.target.id] : e.target.value})
}

const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData)
    axios.post('http://localhost:8000/restaraunt', formData)
    .then(res =>{
        setFormData(initialState)
        navigate('/', {replace: true})
    })
}


  return (
    <form onSubmit={handleSubmit}>

    <label htmlFor='name'>Name</label> 
    <div>    
    <input id='name' name='name' type='text' onChange={handleChange} />
    </div>
    
    <label htmlFor='location'>Location</label>
    <div>
    <input id='location' name='location' type='text' onChange={handleChange} />
    </div>

    <label htmlFor='cuisine'>Cuisine</label>
    <div>
    <input id='cuisine' name='cuisine' type='text' onChange={handleChange}></input>
    </div>

    <div>
        <input id='submit' type='submit' value='Add Restaurant' />
    </div>
        
    </form>
  )
}

export default AddRestaurant