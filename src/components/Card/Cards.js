import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import service1 from '../../assests/images/Service/service1.jpg';
import service2 from '../../assests/images/Service/service2.jpg';
import service3 from '../../assests/images/Service/service3.jpg';
import service4 from '../../assests/images/Service/service4.jpg';
import service5 from '../../assests/images/Service/service1.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Maintaining And Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={service1}
              text='Our Whole Home Water Filtration System helps to remove some of the impurities in the water your family drinks, washes and cooks with'
              label='Purifier'
              path='/services'
            />
            <CardItem
              src={service2}
              text='Our Whole Home Water Filtration System helps to remove some of the impurities in the water your family drinks, washes and cooks with'
              label='Filter cartridges Installation'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={service3}
              text='Our Whole Home Water Filtration System helps '
              label='Water purification Reverse'
              path='/services'
            />
            <CardItem
              src={service4}
              text='Our Whole Home Water Filtration System helps '
              label='Home Filters'
              path='/products'
            />
            <CardItem
              src={service5}
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