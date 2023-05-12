import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Maintaining And Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/service1.jpg'
              text='Our Whole Home Water Filtration System helps to remove some of the impurities in the water your family drinks, washes and cooks with'
              label='Purifier'
              path='/services'
            />
            <CardItem
              src='images/service4.jpg'
              text='Our Whole Home Water Filtration System helps to remove some of the impurities in the water your family drinks, washes and cooks with'
              label='Filter cartridges Installation'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/home1.jpg'
              text='Our Whole Home Water Filtration System helps '
              label='Water purification Reverse'
              path='/services'
            />
            <CardItem
              src='images/home2.jpg'
              text='Our Whole Home Water Filtration System helps '
              label='Home Filters'
              path='/products'
            />
            <CardItem
              src='images/industrial1.jpg'
              text='Our Whole Home Water Filtration System helps '
              label='Industrial'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;