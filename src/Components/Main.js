import React from 'react'
import BannerSlide from './Slider/BannerSlide'
import NewMoviesSlider from './Slider/NewmoviesSlide'
import MoviesSlider from './Slider/MoviesSlider'

const Main = () => {
    return (
        <div>
            <BannerSlide />
            <NewMoviesSlider />
            <MoviesSlider />
        </div>
    )
}

export default Main