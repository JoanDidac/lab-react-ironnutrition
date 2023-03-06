import React, { useState } from 'react';
import './App.css'
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import FoodBox from './components/FoodBox.jsx';


function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
     <h1>Iron Nutrition</h1>
     <Divider orientation="left">Add new food</Divider>
      <Input placeholder="Food name" />
      <Input placeholder="Calories" />
      <Input placeholder="Image URL" />
      <Button type="primary">Add food</Button>

      <Divider orientation="left">Food list</Divider>
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
