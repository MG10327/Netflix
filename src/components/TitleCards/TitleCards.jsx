import React, { useState } from 'react'
import "./TitleCards.scss"
import cards_data from '../../assets/cards/Cards_data'
import { useRef } from 'react'
import { useEffect } from 'react'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]) // Empty array for now.
  const cardsRef = useRef()


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTM4OGRiMzBjYWNkMDkyMWI0OWRjNDZhNmJkMWIyOSIsIm5iZiI6MTczMjMwODQwNi45MDc0MTAxLCJzdWIiOiI2NzNmOWMxNjgzMzdhY2FlMDc2ZGM1NWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CBESgcLtMVIYs3RlCZ_P9yUIrTrTZQ6Y-fDO163hbns'
    }
  };

  const  handleWheel = (e) => {
    e.preventDefault()
    cardsRef.current.scrollLeft += e.deltaY
  }

  useEffect(() => {
    
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, []) // This makes sure the use effect only gets called once

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card) =>
          <div className='card' key={card.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}` } alt={card.title} />
            <p>{card.title}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TitleCards