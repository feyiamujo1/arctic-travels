import React from 'react'
import * as MdIcon from "react-icons/md"
import * as IoIcon from "react-icons/io"
import Nike from "../../images/Nike.png"
import ApplePay from "../../images/applepay.jpg"
import Star from "../../images/star.jpg"
import Intrax from "../../images/intax.jpg"
import Mastercard from "../../images/mastercard.jpg"
import UserIcon from "../../images/user.png"
import CalendarIcon from "../../images/calendar.png"
import LocationIcon from "../../images/map-pin.png"

import "./home.css"

function Home() {
  
  const card_details = [
    {id: 1, topic: "location", icon: LocationIcon,
            info: "Iceland"
        },
    {id: 2, topic: "Person", icon: UserIcon,
        info: "4 Persons"
    },
    {id: 3, topic: "Check In", icon: CalendarIcon,
            info: "12 January 2022"
    },
    {id: 4, topic: "Check Out", icon: CalendarIcon,
            info: "18 January 2022"
    },   
  ]
  const sponsors_logos = [
    {id: 1, image: Nike},
    {id: 2, image: ApplePay},
    {id: 3, image: Star},
    {id: 4, image: Intrax}, 
    {id: 5, image: Mastercard}
  ]
  const region_gallery_infos = [
    {id: 1, Topic: "Mountain Resort", info: "This is a place you would love to be to explore nature paradise anywhere in the world", classname: "region_image region_image_one"},
    {id: 2, Topic: "Fuji Mountain", info: "This is a place you would love to be to explore nature paradise anywhere in the world", classname: "region_image region_image_two"},
    {id: 3, Topic: "Freezing WinterLake", info: "This is a place you would love to be to explore nature paradise anywhere in the world", classname: "region_image region_image_three"},
  ]
  //handleDisplay ((id) =>)

  return (
    <div className='main'>
      <div className='main_display'>
        <h1>Plan The Perfect Winter Trip</h1>
        <h3>Easily plan your ideal ski trip from home with the help of professionals</h3>
        <button className='btnbookhere'>
          Book Here
        </button>
      </div>
      <div className='travel_detail_container'>
        {
          card_details && card_details.map((card_detail) =>
          <div className='travel_detail'>
              <div className='title_container'>
                <span className={card_detail.classname}><img src={card_detail.icon} alt="icon"/></span>
                <p>{card_detail.topic}</p>
              </div>
              <div className='title_info'>
                <p>{card_detail.info}</p> 
                <MdIcon.MdOutlineKeyboardArrowDown className='dropdownIcon'/>
              </div>
          </div>
        )}
          <button>
            <p>Book Trip</p> <IoIcon.IoIosAirplane className='ioplane'/>
          </button>
        </div>
      <div className='travel_regions_container'>
        <div className='sponsors_display'> 
            {
              sponsors_logos && sponsors_logos.map((sponsors_logo) =>
                <div className='sponsor_logo_container'>
                    <img src={sponsors_logo.image} alt="Sponsors Logo"/>
                </div>
              )
            }
        </div>
        <div className='travel_regions_info_container'>
          <div className='travel_regions_info_text_container'>
            <h1 className='first_heading'>
              Creating the best <strong>ice-cold!</strong> experience you would never forget.
            </h1>
            <p>
              Would you explore nature paradise in the world, find the best destination in the world with us.
            </p>
            <h1 className='second_heading'>
              View Regions available
            </h1>
          </div>
        </div>
        <div className='region_gallery'>
          {/* Continue from here */}
          {
            region_gallery_infos && region_gallery_infos.map((region_gallery_info) =>
               <div /*onClick={() =>{handleDisplay(region_gallery_info.id)}} */ className={region_gallery_info.classname}>
                <h1>
                  {region_gallery_info.Topic}
                </h1>
                <h3>
                  {region_gallery_info.info}
                </h3>
                <button className='region_gallery_button'>
                  Book Now
                </button>
              </div>
            )
          }
        </div>
        <div className='resort_destination'>
          <div className='resort_destination_part_one'>
            <h1>
              The best resorts to chill and relax
            </h1>
            <div className='resort_image_container'>
              <div className='resort_one image_container'>
                <div className='resort_image_textual_content'>
                  <h3>
                    Winter landscape Chalet
                  </h3>
                  <p>
                    Cambodia
                  </p>
                  <button>
                    Book Now
                  </button>
                </div>
              </div>
              <div className='resort_two image_container'>
                <div className='resort_image_textual_content'>
                  <h3>
                    Winter landscape Chalet
                  </h3>
                  <p>
                    Cambodia
                  </p>
                  <button>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='resort_destination_part_two'>
            <div className='resort_three image_container'>
              <div className='resort_image_textual_content'>
                <h3>
                  Winter landscape Chalet
                </h3>
                <p>
                  Cambodia
                </p>
                <button>
                  Book Now
                </button>
              </div>
            </div>
            <div className='resort_four image_container'>
              <div className='resort_image_textual_content'>
                <h3>
                  Winter landscape Chalet
                </h3>
                <p>
                  Cambodia
                </p>
                <button>
                  Book Now
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='passes_display'>
          <h1>
            View Passes We’ve Made Available For You
          </h1>
          <button className='btnviewpasses'>
            View Passes
          </button>
      </div>
    </div>
  )
}

export default Home