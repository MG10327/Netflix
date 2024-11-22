import React from 'react'
import "./TitleCards.scss"
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = () => {
  return (
    <div className='titlecards'>
      <h2>Popular on Netflix</h2>
      <div className="card-list">
        {cards_data.map((card, index) =>
          <div className='card' key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TitleCards