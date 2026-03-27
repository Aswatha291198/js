import React, { useContext, useEffect, useState } from 'react'
import { movieContext } from '../store/Movies-context'

const Banner = () => {
  const { movies } = useContext(movieContext)
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original';
  const [index, setIndex] = useState(0)
  const carouselMovies = movies?.slice(0, 5) ?? []

  useEffect(() => {
    if (!carouselMovies.length) return
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % carouselMovies.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [carouselMovies.length]) 

  const currentMovie = carouselMovies[index]
  if (!currentMovie) return null

  return (
    <section className='w-full px-4 mt-3'>
      <figure className='w-full mt-5 shadow-2xl relative'> 
        <img
          src={`${IMG_BASE_URL}${currentMovie.backdrop_path}`}
          alt={currentMovie.title}
          className='rounded-2xl h-[450px] w-full object-cover' 
        />
        <figcaption className='absolute inset-0 flex flex-col justify-end p-8 rounded-2xl
          bg-gradient-to-t from-black/70 to-transparent'>

          <span className='tracking-wider text-white font-bold text-5xl mb-2'>
            {currentMovie.title}
          </span>
          <span className='tracking-wider text-white/70 font-bold text-xl uppercase mb-1'>
            {currentMovie.original_language}
          </span>
          <span className='tracking-wider text-white/70 font-bold text-md'>
            {currentMovie.release_date}
          </span>

          {/* Dots */}
          <div className="absolute bottom-4 right-6 flex gap-2 items-center">
            {carouselMovies.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === index ? 'bg-white scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>

        </figcaption>
      </figure>
    </section>
  )
}

export default Banner