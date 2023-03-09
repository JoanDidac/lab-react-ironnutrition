import React from 'react';
import { Card, Button , Col} from 'antd';
// import AddFoodForm from './AddFoodForm';




const FoodBox = ({ food, onAddFood, onDeleteFood }) => { const handleAddFood = () => { onAddFood(food); };

const handleDeleteFood = () => {
  onDeleteFood(food);
};

// function FoodBox(props) {
//   const { food } = props;

  return (
    <Col className='food-card' >
    <div className="food-item">
                <img src={food.image} alt={food.name} className="food-item-img" />
                <div className="food-item-content">
                  <h2 className="food-item-title">{food.name}</h2>
                  <p className="food-item-description"><strong>Calories:</strong> {food.calories}</p>
                  <p className="food-item-description"><strong>Servings:</strong> {food.servings}</p>
                  <p className="food-item-description"><strong>Description:</strong> {food.description}</p>
                  <div className="food-item-actions">
          
                   
                    <button className="food-item-button" onClick={handleDeleteFood}>Delete</button>
                  </div>
                </div>
              </div>
   
      </Col>

  );
}


export default FoodBox;
