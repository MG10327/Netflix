import React, { useState } from 'react'
import "./TitleCards.scss"
import { useRef } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

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
    
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
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
          <Link to={`/player/${card.id}`} className='card' key={card.id}>
            <div className="image-container">
              <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}` } alt={card.title} />
            </div>
            <p>{card.title}</p>
          </Link>
        )}
      </div>
    </div>
  )
}

export default TitleCards