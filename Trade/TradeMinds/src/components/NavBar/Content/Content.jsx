import React from 'react'
import './content.css'
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5"
import { FaUserAstronaut } from "react-icons/fa6";
import { GrSupport } from "react-icons/gr"
import { IoSettingsOutline } from "react-icons/io5";
import { GiDigitalTrace } from "react-icons/gi"
import { FaCheckCircle } from "react-icons/fa";  
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { growth } from '../../../utils/grwothArray';
import { useState } from 'react';
import { tools } from '../../../utils/grwothArray';
import { trust } from '../../../utils/grwothArray';
import { company } from '../../../utils/grwothArray';
const Content = () => {
    const[count,setCount]=useState(2)
    const[index,setIndex]=useState(0)
        const handlePrev=()=>{
        setIndex(prev=>(prev-1) % growth.length)
        }
    const handleNext=()=>{
 setIndex(prev=>(prev+1) % growth.length)
    }
  return (
   <main className='.content-main'>
    <section className='carousel-sect' >
      <div className='carousel-img'></div>
      <div className="info-cont">
        
        <div className="info-sect">
            <h1>Still stuck with low sales,no team, and all the pressure on your shoulders?</h1>
            <h2 >TradeMinds Academy helps MSMEs move from chaos to clarity with step by step growth systems and local language support</h2>
        </div>
        <div className="info-btn">
            <button style={{
                cursor:'pointer',
                border:'none',
                fontSize:'larger',
                position:'relative',
                left:'100px'
            }}>Book  your free growth consultation today   </button>
            <FaArrowRight/>
        </div>
      </div>
    </section>
    <section className='struggles-sect'>
        <div className="struggle-wrap">
            <div className="struggle-text">
                <h2>The Struggles <br></br>
MSME owners face</h2>
            </div>
        </div>
        <section className='growth-div'>
            <div className="growth-wrap">
                <div className='div-1'>
                    <div className="round-div">
                        <IoStatsChart/> 
                    </div>
                    <span>Sales aren't growing the way you hoped.</span>
                </div>
                <div className='div-1'>
                    <div className="round-div">
                        <FaUserAstronaut/>
                
                    </div>
                     <span>You're wearing every hat, from marketing to management</span>
                </div>
                <div className='div-1'>
                    <div className="round-div">
                         <GrSupport/>
                        
                    </div>
                    <span>There's no real team to support you.  </span>
                </div>
                <div className='div-1'>
                    <div className="round-div">
                       <GiDigitalTrace/>
                       
                    </div>
                   <span>Every decision, every task... it all falls on your shoulders.</span>
                </div>
                <div className='div-1'>
                    <div className="round-div">
                        <IoSettingsOutline/>
                    </div>
                    <span>And worst of all? There's no clear system to grow</span>
                </div>
            </div>
        </section>
    </section>
    <section className='plan'>
        <div className="plan-wrap">
            <div className="plan-cont">
              <h2>Let's map your Strength plan</h2> 
              <FaArrowRight
              style={{
                position:'relative',
                top:'5px'
              }}/> 
            </div>
        </div>
    </section>
    <section className='academy'>
<div className="academy-cont">
    <div className="academy-left">
        <h1>How TradeMinds
Academy Helps</h1>
<div className="academy-wrap">
    <ul className='academy-ul'>
    <li><FaCheckCircle/>
    <span>We give you clear, step-by-step systems to grow your business.</span>
    </li>
    <li><FaCheckCircle/>
    <span>You get full support in Tamil, so nothing is lost in translation.</span>
    </li>
    <li><FaCheckCircle/>
    From branding to hiring, CRM to training, we handle it all under one roof.
    </li>
    <li><FaCheckCircle/>
    You'll have a trusted team by your side, not just advice, we help you execute.</li>
</ul>
</div>
    </div>
    <div className="academy-right">
        <div className='academy-img'></div>
    </div>
</div>
<section>
    <div className="growth-service">
 <div className="growth-text">
   
   <div className="text-wrap">
      <h1>
    Our 8<br></br>
core growth<br></br>
services
    </h1> </div>
    <div className='text-info'>
        
        <p>At TradeMinds Academy, we don't just consult, we build with you. Here's how we support MSMEs at every stage of growth.</p></div>
        <div className="next-div">
             <button onClick={handlePrev}><GrFormPrevious/></button>
             <button onClick={handleNext}><MdNavigateNext/></button>
        </div>
        <span
        style={{
            marginLeft:'20px',
            marginTop:'10px'
        }}>Service {index+1} of {growth.length}</span>
    </div> 
    <div className='item-cont'> {growth.slice(0,count).map((item,idx)=>{
        return (
            <div className='item-info'
            key={idx}>
                <h2>{item.heading}</h2>
                <p>{item.content}</p>
                <button>{item.moto}</button>
            </div>
        )
    })}</div>
</div>

</section>
<section className='trust-cont'>
   <div className="trust-wrap">
    <div className="trust-img"></div>
    <div className="trust-text">
        <div className="trust-h2">
            <h2>
                You don't need another consultant. You need a real partner who understands your market, speaks your language, and walks the journey with you.
            </h2>
            <span>Here's why 250+ business owners across Tamil Nadu choose us:</span>
        </div>
        <div>
            <ul className='trust-ul'>
                {trust.map((item,idx)=>{
                   return(
                    <span key={idx}>
                        {item.text}
                    </span>
                   )
                })}
            </ul>
        </div>
    </div>
   
   </div>
   <div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'20px'
   }}>
    <span style={{
        color:'rgb(121, 18, 255)',
        fontWeight:'600',
        marginTop:'4px'
    }}>Read more about us</span>
   </div>
</section>
<section className='client-cont'>
    <div className="client-text">
        <div className="client-h1">
            <h1>Clients who trust us</h1>
        </div>
        <p>From solar panels to real estate, food to manufacturing, TradeMinds is proud to be the growth

partner for MSMEs across Tamil Nadu.</p>
<h3>Here are just some of the businesses we work with</h3>
    </div>
    <div className="company-cont">
        <div className="list">
            {company.map((item,idx)=>{
                return (
                    <div key={idx}
                    className='list-1'
                    >
                        <h3>{item.name}</h3>
                        <span>{item.type}</span>
                        <span>{item.location}</span>
                    </div>
                )
            })}
        </div>
        <div className='net-btn'>
            <div className='net-wrap'>
                <button>Join the MSME success network</button>
                <span><FaArrowRight/></span>
            </div>
        </div>
    </div>
</section>
<div className="buisness">
   <div className="buisness-wrap">
     <div className="buisness-left"></div>
    <div className="buisness-right">
        <div className="right-h2">
            <h2>Accelerate Business Growth with Trademinds Academy's Expert Systems
</h2>
        </div>
        <p>Trademinds Academy provides a comprehensive profit acceleration system designed to scale businesses through specialized sales training, marketing strategies, and operational automation. Their process begins with a 360-degree diagnosis to identify bottlenecks, followed by the creation of custom growth plans focused on marketing, sales, HR, and team capacity.
        </p>
        <p className='p-2'>Led by specialist Mr. Sam, the Academy acts as a dedicated growth partner that takes full accountability for building businesses and expanding their customer bases.</p>
    </div>
   </div>
</div>
<section className='help'>
    <div className="help-div">
       <div className="help-h2">
         <h2>
            Need help getting started? we've got tools that actually help.
        </h2>
       <p>Running a business can feel like juggling fire: team issues, unclear roles, no systems, and a hundred decisions a day.</p>
<p>That's exactly why we've created a set of simple, powerful tools to make things easier. These aren't generic templates - they're real-world resources we use with our own clients.</p>
      <p>Whether you're stuck on hiring, struggling with sales, or just don't know what's missing... we've got something that can help</p>
       </div>
       <div className='help-img'>
        <div className="help-img-cont"></div>
       </div>
    </div>
</section>
<section className='tools-cont'>
    <div className="tools-h2">
        <h2>Here are a few tools
we can share with you</h2>
    </div>
<div className="tools-wrap
">
    
{tools.map((items,idx)=>{
    return (
        <div className='sin-card'>
            <h3>{items.name}</h3>
            <p>{items.text}</p>
        </div>
    )
})}
</div>
</section>
<section className='message'>
    <div className="msg-img">
        <div className="msg-wrap">

        </div>
    </div>
    <div className="msg-text">
        <h2>Want to try any of these?</h2>
        <p>Just message us. Tell us what you're struggling with, and we'll point you to the right tool to fix it.</p>
    <p>We're not here to sell templates. We're here to help you grow.

Message Us to get startedArrow</p>

<button>Message to get started</button>
    </div>

</section>
<section className='insights'>
    <div className="insights-h2">
        <h2>
            Insights that actually help you grow
        </h2>
        <p>Not just theory. Not just trends. Our blog is packed with real, practical advice for MSMEs who want to scale, in the smart way.</p>
    <p>Whether you're just starting out or stuck at a growth plateau, our insights are designed to guide you through the challenges of running and growing a business.

</p>
    </div>
    <div className="idea-img">
        <div className="idea-cont"></div>
        <div className="idea-text">
            <h2>What You'll Find Inside</h2>
            <div className="div-cont">
                <span>Tips to scale your business without burning out</span>
                
                <p>Proven ideas that help you grow sustainably even in Tier 2 & 3 markets.</p>
                            </div>
            <div className="div-cont">
                <span>How to build a sales process that works on Auto-Pilot</span>
                <p>Learn how to stop chasing leads and start converting them consistently.</p>
            </div>
            <div className="div-cont">
                <span>Hiring & Team management strategies that actually work</span>
                <p>No fluff, just clear guidance on building a strong, dependable team.</p>
            </div>
            <div className="div-cont">
                <span>Real estate sales tactics for Plot & Villa promoters
</span>
           <p>Learn what's working right now to drive bookings in competitive markets.

</p>
            </div>
            
        </div>
    </div>
</section>
<section className='connect-sect'>
<h2>Ready to Talk? Let's Connect.
</h2>
<span>Get clarity. Get direction. No strings attached.</span>
<button>
    Book a strategy call with Mr.Sam
</button>

</section>
  <section className='last-h2'>
        <h2>We'd love to hear from you, let's build your business, together.</h2>
    </section>
    <div className="footer-section">
        <div className="footer-cont">
            <div className="div-f">
                <div className="logo-div">
                    <FaFacebook/>
                    <FaInstagram/>
                    <IoLogoYoutube/>
                    <FaLinkedinIn/>
                    <RiTwitterXLine/>
                </div>
            </div>
            <div className="div-f">
                <div className="links">
                    <span>Links</span>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Tools</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            <div className="div-f">
                <div className="contact-info">
                    <span>Contact</span>
                <span><FaPhoneAlt/>+91 81221 76424</span>
                <span><TbWorldWww/>www.trademindsacademy.in</span>
                <span><CiLocationOn/>No. 40, Periyar Nagar East,
Masakalipalayam,
Coimbatore - 641015</span>
                </div>
            </div>
        </div>
    </div>
    </section>
  
   </main>
  )
}

export default Content