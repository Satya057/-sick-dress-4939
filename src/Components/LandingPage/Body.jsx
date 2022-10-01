import React from 'react'
import style from "./Body.module.css"
import TrendingonNaukriToday from './TrendingonNaukritoday'
import Exploretopcompanieshiringnow from "./Exploretopcompanieshiringnow"
import Featuredcompaniesactivelyhiring from './Featuredcompaniesactivelyhiring'
import Discoverjobsacrosspopularroles from './Discoverjobsacrosspopularroles'
import Sublandbody from './Sublandbody'
import SponsoredCompanies from './SponsoredCompanies'

const Body = ({changealltohide}) => {
 
  return (
    <div onMouseEnter={changealltohide} className={style.lbody}>
        <div className={style.lb1}>
            <h1>Find your dream job now</h1>
            <p>5 lakh+ jobs for you to explore</p>
            <div className={style.searchcarrier}>
              <i class="fas fa-search"></i>
              <input type="text" placeholder='Enter skills / designations / companies' className={style.lbinp1}/>
              <select className={style.lbinp2}>
                <option value="" disabled selected hidden>
                Select experience
                </option>
                <option value="">Fresher <span>(Less than 1 year)</span></option>
                <option value="">1 Year</option>
                <option value="">2 Year</option>
                <option value="">3 Year</option>
                <option value="">4 Year</option>
                <option value="">5 Year</option>
                <option value="">6 Year</option>
                <option value="">7 Year</option>
              </select>
              <input type="text" placeholder='Enter location' className={style.lbinp2} />
              <button className={style.lbbtn1}>Search</button>
            </div>
        </div>

        <div className={style.lb2}>
            <div className={style.lb2grid}>
              <img src="https://static.naukimg.com/s/0/0/i/homepage-register/accenture-logo.png" alt="" />
            </div>
            <div className={style.lb3grid}>
            <img src="https://static.naukimg.com/s/0/0/i/homepage-register/myntra-logo.png" alt="" />
            </div>
            <div>
              <p className={style.lbh3}>Get contacted by top companies hiring on Naukri!</p>
              <p className={style.lbgray}>Your chance to build that dream career is here</p>
            </div>
            <button className={style.lbbtn2}>Register Now</button>
        </div>
       


        <TrendingonNaukriToday/>
        <Exploretopcompanieshiringnow/>
        <Featuredcompaniesactivelyhiring/>
       
        <div className={style.sl2}>
          <div>
            <img src="https://static.naukimg.com/s/0/0/i/role-collection.png" alt="" />
            <p className={style.large}>Discover jobs across<br></br>popular roles</p>
            <p className={style.med}>Select a role and we'll show<br></br>you relevant jobs for it!</p>
          </div>
          <Discoverjobsacrosspopularroles/>
        </div>
        <SponsoredCompanies/>
        <Sublandbody/>
        <div className={style.lastsubdiv}>
          <div className={style.lsd1}>
            <div>
              <p className={style.lslarge}>10M+ users are on the Naukri app</p>
              <p className={style.lsgray}>Get real-time job updates & more!</p>
              <div className={style.lsearch}>
                <input type="text" placeholder='Enter Mobile number...' />
                <button>Get Link</button>
              </div>
              <div className={style.imgflex}>
                <img src="https://static.naukimg.com/s/0/0/i/download-app-link/Gplay.png" alt="" />
                <img src="https://static.naukimg.com/s/0/0/i/download-app-link/Appstore.png" alt="" />
              </div>
            </div>
            <img src="https://static.naukimg.com/s/0/0/i/download-app-link/qr-code.svg" alt="" className={style.barcode} />
          </div>
          <img src="https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroup.png" alt="" />
        </div>
    </div>
  )
}

export default Body;