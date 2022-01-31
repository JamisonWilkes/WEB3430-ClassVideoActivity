import React, { useEffect, useState } from 'react'
import { FaStar, FaStoreAltSlash } from 'react-icons/fa'

export default function StarRating(props){
    const movieRating = props.rating
    const starCount = 5
    //let ratingValue = 3
    const activeColor = 'maroon'
    const inactiveColor = 'grey'

    const stars = Array.from({length: starCount}, () => <FaStar/>)

    return(
        <div>
            {stars.map((s, i) => {
                let style = inactiveColor;
                if(i <= Math.floor(movieRating/2) - 1){
                    style=activeColor
                }
                return (
                    <span key={i} style={{color: style}}>{s}</span>
                )
            })}
        </div>
    )
}