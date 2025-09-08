import React from 'react'
import './footer.css'
import {useNavigate} from 'react-router-dom'

const Footer = () => {
    const navigate=useNavigate()
  return (
    <>
    <section className='footer-cont'>
        <footer className='footer-disp'>
            <div className='footer-logo'>
            <ul className='company'>
                <span >company</span>
                <li onClick={()=>{
                    navigate('/')
                }}>home</li>
                <li onClick={()=>{
                    navigate('/')
                }}>contact</li>
                <li
                onClick={()=>{
                    navigate('/about')
                }}
                >About us</li>
                
            </ul>
            <ul className='company'>
                <span>Social</span>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Linkedin</li>
            </ul>
            <ul className='company'>
                <span>Privacy and Terms</span>
                <li>Faq </li>
                <li>Privacy Policy</li>
               
                <li>
                    CANCELLATION POLICY
                </li>
            </ul>
            </div>
            
        </footer>

    </section>
    </>
  )
}

export default Footer