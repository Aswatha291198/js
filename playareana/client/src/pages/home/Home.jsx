import React, { useEffect, useState } from 'react'
import './home.css'
import kick from '../home/kick.png'
import { useSelector, useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../../../redux/slice/userSlice'
import { getAllTurf } from '../../api/turf'
import group from '../../assets/group.png'
import support from '../../assets/support.png'
import trophy from '../../assets/trophy.png'
import coach from '../../assets/coach.png'
import bar from '../../assets/bar-chart.png'
import check from '../../assets/check-mark.png'
import { getAllGame } from '../../api/game'
import { message } from 'antd'
import Footer from '../footer/Footer'
import { GetAllBlogs } from '../../api/blog'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [turfs, setTurs] = useState(null)
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const { user } = useSelector(store => store.users)
  const [sport, setSports] = useState(null)
  const[blogs,setBlogs]=useState(null)

  const getSport = async () => {
    try {
      dispatch(showLoading())
      const blogResponse=await GetAllBlogs()
      if(blogResponse.success){
        const allBlogs=blogResponse.data
        setBlogs(allBlogs.map((blog)=>{
          return{
            ...blog,
            key:`blog${blog._id}`
          }
        }))
      }
      const response = await getAllGame()
      if (response.success) {
        const allgames = response.data
        setSports(allgames.map((game) => {
          return {
            ...game,
            key: `game${game._id}`
          }
        }))
      }
      else {
        message.error(response.message)
      }
      dispatch(hideLoading())
    } catch (error) {
      dispatch(hideLoading())
      console.log(error.message);
    }
  }
  useEffect(() => {
    getSport()
  }, [])
const truncateTitle = (title) => {
  const words = title.split(" ");
  if (words.length > 3) {
    return words.slice(0, 3).join(" ") + "..."
  }
  return title;
};



  return (
    <>
      <main className='container'>
        <section className='section-cont'>
          <div className='content-div'>
            <div className='space-div'>
              <div className='first-div'>
                <div className='blocking'></div>

                <h1 className='content-info'>Explore Playing Communiteis</h1>
                <p className='content-para'>Connect, play, and grow with like-minded sports enthusiasts around you</p>
              </div>
            </div>

            <div className='second-div'>
              <div className='second-div-img'>
                <img src={kick} alt="kick" className='kick' />
              </div>
            </div>
          </div>
        </section>
        <section className='tournement-div-home'>
          {user && user.role === 'player' && (
            <div className='div-wrap'>
              <div className='lead-name'>
                <h1 className='be'>Be the Game <span className='color'>Changer</span></h1>
              </div>
            </div>
          )}
          {user && user.role === 'admin' &&(
                    <div className='div-wrap'>
        <div className='lead-name'>
          <h1 className='be'>Control  <span className='color'>Center</span></h1>
        </div>
      </div>)}
          <div className='content-row'>
            {user && user.role === 'player' && (
              <>
                <div className='start'>
                  <div className='start-div'>
                    <div className='start-img'>
                      <div className='trophy'>
                        <span className='tro-span'><img src={trophy} alt="tro" className='tro' /></span>
                      </div>
                    </div>
                    <div className='start-name'>
                      <h2 className='kick'>Kickstart a Tournament  </h2>
                      <p className='kick-p'>Create your own league and crown the champions</p>
                    </div>
                    <div className='start-btn'>
                      <button className='btn-str'
                      onClick={()=>{
                        navigate('/tournament')
                      }}>Start</button>
                    </div>

                  </div>
                </div>
                <div className='start'>
                  <div className='start-div'>
                    <div className='start-img'>
                      <div className='trophy '>
                        <span><img src={coach} alt="c" className='coach' /></span>
                      </div>
                      <div>

                      </div>
                    </div>
                    <div className='start-name'>
                      <h2 className='kick-h'>Step In as a Trainer</h2>
                      <p className='kick-t'>Turn passion into guidance, and players into legends.</p>
                    </div>
                    <div className='start-btn'>
                      <button className='btn-str'>Start</button>
                    </div>
                  </div>

                </div>
              </>
            )}
            {user && user.role === 'owner' &&(
                    <div className='div-wrap'>
        <div className='lead-name'>
          <h1 className='be'>Own a Turf? Manage it  <span className='color'>Smarter</span></h1>
        </div>
      </div>)}

      
     
            {user && user.role === 'owner' && (

              <>
                <div className='start'>
                  <div className='start-div'>
                    <div className='start-img'>
                      <div className='trophy'>
                        <span className='tro-span'><img src={trophy} alt="tro" className='tro' /></span>
                      </div>
                    </div>
                    <div className='start-name'>
                      <h2 className='kick'>List Your Turf  </h2>
                      <p className='kick-p'>Showcase your venue and attract more players effortlessly</p>
                    </div>
                    <div className='start-btn'>
                      <button className='btn-str'>Start</button>
                    </div>

                  </div>
                </div>
                <div className='start'>
                  <div className='start-div'>
                    <div className='start-img'>
                      <div className='trophy '>
                        <span><img src={coach} alt="c" className='coach' /></span>
                      </div>
                      <div>

                      </div>
                    </div>
                    <div className='start-name'>
                      <h2 className='kick-h'>Manage with Ease</h2>
                      <p className='kick-t'>Control your turf hassle-free, all in one place</p>
                    </div>
                    <div className='start-btn'>
                      <button className='btn-str'>Start</button>
                    </div>
                  </div>

                </div>
              </>
            )}
            {user && user.role === 'admin' && (
              <>
                <div className='start'>
                  <div className='start-div'>
                    <div className='start-img'>
                      <div className='trophy'>
                        <span className='tro-span'><img src={check} alt="tro" className='tro' /></span>
                      </div>
                    </div>
                    <div className='start-name'>
                      <h2 className='kick'>Streamline Approvals  </h2>
                      <p className='kick-p'>Quickly review and approve turf requests with just a click</p>
                    </div>
                    <div className='start-btn'>
                      <button className='btn-str'>Start</button>
                    </div>

                  </div>
                </div>
                <div className='start'>
                  <div className='start-div'>
                    <div className='start-img'>
                      <div className='trophy '>
                        <span><img src={bar} alt="c" className='coach' /></span>
                      </div>
                      <div>

                      </div>
                    </div>
                    <div className='start-name'>
                      <h2 className='kick-h'>Track Performance</h2>
                      <p className='kick-t'>Monitor bookings, revenue, and turf usage in real time</p>
                    </div>
                    <div className='start-btn'>
                      <button className='btn-str'>Start</button>
                    </div>
                  </div>

                </div>
              </>
            )}
            
          </div>
        </section>
        <section className='blogs-cont'>
          <span>Blogs</span>
          {blogs && blogs.map((blog)=>{
            return (
              <div
              key={blog._id}
              className='blogs-home'
              onClick={()=>{
                navigate(`/blog/${blog._id}`)
              }}>
              <div>
                <img src={blog.image} alt="blog"
                className='blogs-img-home' />
              </div>
               <div className='blogs-title-cont'> 
                <h3 className='blog-title-div'>{truncateTitle(blog.title)}</h3>
                <span className='blog-span'>{blog.author.name}</span> </div>
              </div>
         
            )
          })}
        </section>
        <div className='sports-cont'>
          {sport && sport.map((game) => {
            return (
              <div
                key={game._id}
                className='sport-wrapper'
              >
                <img src={game.image} alt="game" />
                <span className='game-name'>{game.name}</span>
              </div>
            )
          })}

        </div>
<Footer/>
      </main>
    </>
  )
}

export default Home