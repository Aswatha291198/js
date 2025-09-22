import React, { useEffect, useState } from 'react'
import './home.css'
import kick from '../home/kick.png'
import field from '../../assets/soccer-field.png'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../../../redux/slice/userSlice'
import { getAllTurf } from '../../api/turf'
import { getAllGame } from '../../api/game'
import { GetAllBlogs } from '../../api/blog'
import Footer from '../footer/Footer'


const Home = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const[blogs,setBlogs]=useState(null)
  const[games,setGames]=useState(null)
  const[location,setLocation]=useState('')
  const { user } = useSelector(store => store.users)
  const[turfs,setTurfs]=useState(null)
  const [openIndex, setOpenIndex] = useState(null);
const faqs = [
  { 
    question: "What is Playearena?", 
    answer: "Playearena is a platform where users can book turfs and grounds across India." 
  },
  { 
    question: "How do I book a turf?", 
    answer: "You can browse available turfs, select your preferred time slot, and book directly online." 
  },
  { 
    question: "Can I cancel my booking?", 
    answer: "Yes, cancellations are allowed up to 24 hours before your booking." 
  }
];

  const trimTitle=(title)=>{
    return title.split(" ").slice(0,4).join(" ")+"..."
  }

  const getData=async()=>{
    try {
      dispatch(showLoading())
      const turfResponse=await getAllTurf()
      const gameResponse=await getAllGame()
      const blogResponse=await GetAllBlogs()
      if(turfResponse.success){
        const shuffled = turfResponse.data.sort(() => 0.5 - Math.random());
        setTurfs(shuffled.slice(0, 4));
        dispatch(hideLoading())
      }
      if(gameResponse.success){
        setGames(gameResponse.data)
        dispatch(hideLoading())
      }
      if(blogResponse.success){
        setBlogs(blogResponse.data)
        dispatch(hideLoading())
      }
      dispatch(hideLoading())
      console.log(turfResponse);
      console.log(blogResponse,'blog');
      console.log(gameResponse,'game');
      
      
      
    } catch (error) {
      console.log(error.message);
      dispatch(hideLoading())
    }
  }

useEffect(()=>{
  getData()
},[location])

  return (
    <>
    <main className='home-container'>
      <div className='home-wrapper'>
    <section className='hero-cont'>
      <section className='left-cont'>
      <div className='left-wrap'>
        <div className='left-div'>
          <input type="text" placeholder='Enter Your Location'
          onChange={(e)=>setLocation(e.target.value)} className='home-input' />
          <h1 className='left-info'>Explore Playing Communities</h1>
           <p className='left-para'>Connect, play, and grow with like-minded sports enthusiasts around you</p>
        </div>
      </div>
              
      </section>
       <section className='right-cont'>
        <div className='right-wrap'>
          <div className='right-div'>
            <img src={kick} alt="kijkc" className='kick-icon' />
          </div>
        </div>
       </section>
    </section>
    <section className='home-content'>
      <div className='content-wrap'>
        <div className='home-venue'>
        <h1 className='venue-text-home'>Book Venues</h1>
        <h2 className='see-all'
        onClick={()=>{
          navigate('/book')
        }}>See All Turfs </h2>
        <div className='show-turf-cont'>
          {turfs &&  turfs.filter((turf)=>turf.location.toLowerCase().includes(location.toLowerCase())).map((turf)=>{
            return (
             <div
             className='home-turf-cards'
             key={turf._id}
             onClick={()=>{
              navigate(`turf/${turf._id}`)
             }}
             >
             <img src={turf.poster} alt="turf" className='home-turf-img' />
             <h2 className='home-turf-name'>{turf.name}</h2>
             <h3 className='home-turf-address'>{turf.address}</h3>
             </div>
            )
          })}
        </div>
      </div>
      <h2 className='popular'>Popular Sports</h2>
      <div className='home-game-cards'>
        {games && games.map((game)=>{
        return (
          <div
          className='home-game-card'
          key={game._id}>
            <img src={game.poster} alt="gmae" className='home-game-img' /> 
            <span className='home-game-name'>{game.name}</span>
          </div>
        )
      })}
      </div>
      <div className='home-blog-cards'>
        <h2 className='home-blog-text'>Blogs</h2>
        {blogs && blogs.map((blog)=>{
          return (
            <div
            className='home-blog-card'
            key={blog._id}
            
            >
              <img src={blog.image} alt="blogs" className='home-blog-img'onClick={()=>{
              navigate(`blog/${blog._id}`)
            }} />
              <span className='home-blog-title'>{trimTitle(blog.title)}</span>
             <div className='author-wrap'>
               <span className='home-blog-author'>{blog.author.name}    |</span>
              <span className='home-created'>
  {new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}
</span>
             </div>
</div>
          )
        })}
      </div>
      
      </div>
      
    </section>

    <section className='home-about'>
      <div className='about-wrap'>
        <div className='about-div-cont'>
          <p className='about-para'>We help people easily find and book sports grounds while bringing players and communities together</p>
          <button className='about-btn'
          onClick={()=>{
            navigate('/about')
          }} >Know About Us</button>        
        </div>
        <div className='about-img-div'>
          <img src={field} alt="field"  className="about-img"/>
        </div>
      </div>
    </section>

      </div>
      <Footer/>
    </main>
    
    </>
  )
}

export default Home