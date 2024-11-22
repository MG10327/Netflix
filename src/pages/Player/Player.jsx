import React, { useEffect, useState } from 'react'
import "./Player.scss"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams()

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTM4OGRiMzBjYWNkMDkyMWI0OWRjNDZhNmJkMWIyOSIsIm5iZiI6MTczMjMwODQwNi45MDc0MTAxLCJzdWIiOiI2NzNmOWMxNjgzMzdhY2FlMDc2ZGM1NWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CBESgcLtMVIYs3RlCZ_P9yUIrTrTZQ6Y-fDO163hbns'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => {
      const trailers = res.results.filter(result => result.type === "Trailer");
      setApiData(trailers[0]);
    })
    .catch(err => console.error(err));
  }, []) // This makes sure the use effect only happens once

  const dateSlicer = () => (
    apiData.published_at.slice(0, 10) // This returns the first ten characters which will be the date
  )

  return (
    <div className='player'>
      <a href="/">
        <img src={back_arrow_icon} alt="" />
      </a>
        <div className='iframe-container' key={apiData.key}>
          <iframe
            src={`https://www.youtube.com/embed/${apiData.key}`}
            width="90%"
            height="90%"
            title='trailer'
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="player-info">
            <p className='trailer-date'>Published At: {dateSlicer()}</p>
            <p className='trailer-name'>{apiData.name}</p>
            <p className='trailer-type'>{apiData.type}</p>
          </div>
        </div>
    </div>
  )
}

export default Player