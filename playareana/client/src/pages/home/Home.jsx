import React from 'react'
import './home.css'
const Home = () => {
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
        
        <div className='second-div'></div>
      </div>
    </section>

    <div>
      <section className='choose-container'>
        <div className='text-container'>
          <h2 className='choose-text'>What we <span className='provide'>Provide</span></h2>
        </div>
        <div className='choose-wrap'>
          
          <div className='connect'>
            <div className ='connet-div'>
              <i className="fa-solid fa-link link-icon"></i>
              <span>Connect</span>
            </div>
            <p >Seamlessly connect with your favorite sports communities and partners  </p>
          </div>
           <div className='customer'></div>
            <div className='membership'></div>
        </div>
      </section>
    </div>
   </main>
    </>
  )
}

export default Home