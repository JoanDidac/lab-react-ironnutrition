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
      <div className="ant-row">
        <h1 className="title">Iron Nutrition</h1>
      </div>
      <Divider className="divider" orientation="center">Add new food</Divider>
      <AddFoodForm className="add-food-form" onAddFood={handleAddFood} />
      <Divider className="divider" orientation="center">Food list</Divider>
      <div className="food-list">
        <Row gutter={[16, 16]}>
          {foodList.map((food,index) => (
            <Col span={8} key={index}>
              <div className="food-item">
                <img src={food.image} alt={food.name} className="food-item-img" />
                <div className="food-item-content">
                  <h2 className="food-item-title">{food.name}</h2>
                  <p className="food-item-description"><strong>Calories:</strong> {food.calories}</p>
                  <p className="food-item-description"><strong>Servings:</strong> {food.servings}</p>
                  <p className="food-item-description"><strong>Description:</strong> {food.description}</p>
                  <div className="food-item-actions">
          
                    <button className="food-item-button">Add</button>
                    <button className="food-item-button">Delete</button>
                  </div>
                </div>
              </div>
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
