import React, { useState } from 'react';
import './App.css'
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import FoodBox from './components/FoodBox.jsx';
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [foodList, setFoodList] = useState(foods);

  const handleAddFood = (newFood) => {
    setFoodList([...foodList,newFood]);
  }

  return (
    <div className="App">
     <h1>Iron Nutrition</h1>
     <Divider orientation="center">Add new food</Divider>
     <AddFoodForm onAddFood={handleAddFood} food={food} />
      <Divider orientation="center">Food list</Divider>
      <Row gutter={[16, 16]}>

      {foodList.map((food,index) => (
        <Col span={8} key={index}>
        <FoodBox key={food.id} food={food} />
        </Col>
      ))}
      </Row>
    </div>
  );
}


export default App;
