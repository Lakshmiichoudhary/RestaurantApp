import React from 'react'
import Card from '../UI/Card'
import Item from './Item'
import './Mealslist.css'

const DummyMeals = [
    {
        id: '11',
        name: 'pizza',
        description: 'italian',
        price: '100',
    },
    {
        id: '14',
        name: 'Dosa',
        description: 'indian',
        price: '40',

    },
    {
        id: '15',
        name: 'Maggie',
        description: 'chinese',
        price: '60',

    },
]

const MealsList = () => {
    const items = DummyMeals.map((meal) => (
      <Item
        key={meal.id}
        id={meal.id}
        name={meal.name}
        des={meal.description}
        price={meal.price}
      />
    ));
  
    return (
      <div className='meals'>
        <Card>
          <ul>{items}</ul>
        </Card>
      </div>
  )
}

export default MealsList
