import React from 'react';
import { Card, Button , Col} from 'antd';




function FoodBox(props) {
  const { food } = props;

  return (
    <Col>
    <Card
      title={food.name}
      style={{  width: 300, height: 350 }}
    >
      <img alt={food.name} src={food.image}  height={130}/>
        <p>{food.calories} Calories</p>
        <p>{food.servings} Servings</p>

      <Button> Add to Cart </Button>
      <Button> Delete </Button>
    </Card>
    </Col>
  );
}

export default FoodBox;
