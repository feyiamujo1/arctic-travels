import React from 'react'
import Logo from "../../images/footerlogo.png"
import Facebook from "../../images/facebook.png"
import Twitter from "../../images/instagram.png"
import Ig from "../../images/twitter.png"
import "./footer.css"

function Footer() {
  const company_infos = [
    {id: 1, heading: "Company", subheadingOne: "About", subheadingTwo: "Career", subheadingThree: "Mobile"},
    {id: 2, heading: "Contact", subheadingOne: "FAQ", subheadingTwo: "Press", subheadingThree: "Affiliates"},
    {id: 3, heading: "More", subheadingOne: "Airlines", subheadingTwo: "Airfees", subheadingThree: "Lowfare Tips"}
  ]
  return (
    <div className='footer'>
      <div className='footer_top'>
        <div className='company_media_info'>
          <img src={Logo} alt = "logo"/>
          <p className='company_name'>
            Arctic Travels
          </p>
          <p className='company_moto'>
          Book your trip in minutes, get full
          control for much longer.
          </p>
          <div className='company_social_handles'>
            <img src={Facebook} alt="facebook icon"/>
            <img src={Twitter} alt="twitter icon"/>
            <img src={Ig} alt="Ig icon"/>
          </div>
        </div>
        <div className='company_info_directory_container'>
          {
            company_infos && company_infos.map((company_info) =>
              <div className='company_info_directory'>
                <p className='topheading'>
                  {company_info.heading}
                </p>
                <p className='subheading'>
                  {company_info.subheadingOne}
                </p>
                <p className='subheading'>
                  {company_info.subheadingTwo}
                </p>
                <p className='subheading'>
                  {company_info.subheadingThree}
                </p>
              </div>
            )
          }

        </div>
      </div>
      <div className='copright_container'>
          <p>© 2022 Arctic Travels - All right reserved.</p>
          <div className='inner_copright_container'>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
      </div>
    </div>
  )
}

export default Footer