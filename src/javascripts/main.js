// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import React from 'react'
import ReactDOM from 'react-dom'
import {movies} from "./movies"
import {MovieList} from "./components/movieList"

class Main extends React.Component{
  render() {
    return <MovieList movies = {movies}/>
  }
}



ReactDOM.render(<Main/>, document.getElementById('main'))
