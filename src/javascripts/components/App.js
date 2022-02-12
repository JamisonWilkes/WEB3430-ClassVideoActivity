import React from 'react'
import MovieList from './MovieList'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min'

export default function Main(){
    return (
        <BrowserRouter>
            <div className='container'>
                <header>
                <h1>Top 10 Movies: Jamison Wilkes</h1>
                </header>
                <MovieList/>
            </div>
            <footer>&copy; All rights reserved</footer>
        </BrowserRouter>
    ) 
}