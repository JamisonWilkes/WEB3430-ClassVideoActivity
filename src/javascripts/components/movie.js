import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import StarRating from './StarRating'

export function Movie(props){
    const m = props.movie
    const onLike = props.onLike
    return(
      <div className="card">
        <img src={m.poster} alt={m.title} />
        <h2>{m.title}</h2>
        <p>{m.plot}</p>
        <ul className='extra'>
          <li><StarRating rating={m.rating}/></li>
          <li><strong>{m.rating}</strong></li>
          <li><strong>{m.votes}</strong></li>
          <li>
            <FaThumbsUp color="maroon" onClick={onLike}/><small>{m.likes ? m.likes: 0}</small>
          </li>
        </ul>
      </div>
    )
  }
  