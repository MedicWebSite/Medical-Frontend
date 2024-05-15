import React from 'react'
import './AnnouncementBar.scss'
import Container from '../../utils/Utils'
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const AnonouncementBar = () => {

  const userAuth = JSON.parse(localStorage.getItem('user'))

  const { pathname } = useLocation()
  if (pathname.includes("patient")) return null
  if (pathname.includes("doctor")) return null


  return pathname.includes('auth') ? null : (
    <div className='announcement'>
      <Container>
        <div className="announcement-wrapper">
          <div className="location-item">
            <p><i><FaLocationDot /></i> City:</p>
            <strong>Tashkent</strong>
          </div>
          <div className="top-actions">
            <a href='tel:+998335003117' className="number-text">+998 (33) 500-31-17</a>
            <div className="work-time">
              <span className='material-symbols-outlined'>schedule</span>
              <p>Monday - Sunday 08:00 - 19:00</p>
            </div>
            <div className="languages-action">
              <button>UZB</button>
              <button>RUS</button>
              <button>ENG</button>
            </div>
            {
              userAuth.Role === 'User' ? <Link className='auth-link' to={'/patient'}> <span className='material-symbols-outlined'>account_circle</span> Account</Link>
                : userAuth.Role === 'Admin' ? <Link className='auth-link' to={'/doctor'}> <span className='material-symbols-outlined'>account_circle</span> Account</Link>
                  : <Link className='auth-link' to={'/auth/register'}> <span className='material-symbols-outlined'>person</span> Register</Link>
            }
          </div>

        </div>
      </Container>
    </div>
  )
}

export default AnonouncementBar
