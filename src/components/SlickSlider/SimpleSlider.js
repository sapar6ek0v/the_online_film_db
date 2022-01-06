import Slider from "react-slick";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";


export default function SimpleSlider() {
    const navigate = useNavigate()
    const [windowFilm, setWindowFilm] = useState([])
    const [directory, setDirectory] = useState(0)

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=4eb03517df3f1b8227a751b8d89d9ee8&language=ru&&page=1`)
            .then(({data}) => {
                setWindowFilm(data.results)
            })
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1204,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 448,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <Slider {...settings}>
                {
                    windowFilm.map(it => {
                        const onClick = (e) => {
                            if (Math.abs(e.clientX - directory) < 5) {
                                navigate(`/movie-info/${it.id}`)
                            }
                        }
                        const input = it.release_date.split('-')
                        const data = input.slice(0,1);
                        return (
                            <div key={it.id}>
                                <div className='block'>
                                    <button onMouseDown={(e) => setDirectory(e.clientX) } onClick={onClick}  className='slider-box slider-btn'>
                                        <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + it.poster_path}
                                             alt={it.title}/>
                                        <div className='slider-text'>{it.title}</div>
                                        <div className='slider-popular'>
                                            {it.vote_average}
                                        </div>
                                        <span className='slider-date'>({data})</span>
                                    </button>
                                </div>
                            </div>

                        )
                    })

                }
            </Slider>
        </>
    );
}