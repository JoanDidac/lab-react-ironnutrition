// import 
import React, { useState } from "react";
import { Input, Button, Form, Divider } from "antd";


export default function AddFoodForm(props) {
  const { handleAddFood } = props;

  const initialState = {
    name: '',
    calories: '',
    image: '',
    servings: '',
  }

  const [newFood ,setNewFood] = useState(initialState)

  const handleChange = (e) => {
    console.log(setNewFood);
    setNewFood(prev => {
      return {
        ...prev, [e.target.name]: e.target.value 
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddFood(newFood);
    setNewFood(initialState);
    console.log(newFood);
  }

  return (

    <Form className='add-food-form' onSubmit={handleSubmit}>

      <label></label>
      <Input placeholder="Name" type="text" name='name' value={newFood.name} onChange={handleChange} />

      <label></label>
      <Input placeholder="Image" type="text" name='image' value={newFood.image} onChange={handleChange} />

      <label></label>
      <Input placeholder="Calories" type="text" name="calories" value={newFood.calories} onChange={handleChange} />

      <label></label>
      <Input placeholder="Servings" type="text" name='servings' value = {newFood.servings} onChange={handleChange} />

      <Button className="form-button" type="submit" >Add Food</Button>

      </Form>
        )
 }




