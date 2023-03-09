import React, { useState } from 'react';
import './App.css'
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import FoodBox from './components/FoodBox.jsx';
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [foodList, setFoodList] = useState(foods);

  const handleAddFood = (newFood) => {
    console.log(newFood);
    setFoodList([...foodList,newFood]);
  }

  const handleDeleteFood = (foodToDelete) => {
    const newFoodList = foodList.filter((food) => food.name !== foodToDelete.name);
    setFoodList(newFoodList);
  }
  return (
    <div className="App">
      <div className="ant-row">
        <h1 className="title">Iron Nutrition</h1>
      </div>
      <Divider className="divider" orientation="center">Add new food</Divider>
      <AddFoodForm handleAddFood={handleAddFood} />
      <Divider className="divider" orientation="center">Food list</Divider>
      <div className="food-list">
        <Row gutter={[16, 16]}>
          {foodList.map((food,index) => (
            <Col span={8} key={index}>
              <FoodBox key={index} food={food}  onDeleteFood={handleDeleteFood}/>
            </Col>
          ))}
        </Row>
      </div>
      <footer>
        <p>Created by U&D - All rights reserved </p>
        <p>☜(⌒▽⌒)☞</p>
      </footer>
    </div>
  );
}

export default App;
