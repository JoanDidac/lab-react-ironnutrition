// import 
import React, { useState } from "react";
import { Input, Button, Form } from "antd";



const AddFoodForm = ({ onAddFood }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = { name, image, calories, servings };
    onAddFood(newFood);
    setName("");
    setImage("");
    setCalories("");
    setServings("");
    console.log(food);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(event) => setCalories(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="number"
          placeholder="Servings"
          value={servings}
          onChange={(event) => setServings(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button onAddFood={handleAddFood} food={food}type="primary" htmlType="submit">Add Food</Button>
      </Form.Item>
    </Form>
  );
};

export default AddFoodForm;
