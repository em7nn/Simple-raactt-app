import React from 'react'
import './index.scss'
function RecentStories() {
  return (
    <>
      <div class='recentstories'>
        <div class='recentstories_text'>
          <h2>RECENT STORIES</h2>
        </div>
        <div class='cards'>
          <div class='card'>
            <div class='cards_img'>
              <img src='https://dlcdnrog.asus.com/rog/media/1670893994624.webp' alt='card' />
            </div>
            <div class='cardText'>
              <p>STREAM WITH CONFIDENCE AND CLARITY WITH THE ROG EYE S WEBCAM</p>
            </div>
          </div>
          <div class='card'>
            <div class='cards_img'>
              <img src='https://dlcdnrog.asus.com/rog/media/1669857154768.webp' alt='card' />
            </div>
            <div class='cardText'>
              <p>STEAL THE SPOTLIGHT WITH THE NEW ROG STRIX GEFORCE RTX 4090 AND RTX 4080 WHITE EDITION CARDS</p>
            </div>
          </div>
          <div class='card'>
            <div class='cards_img'>
              <img src='https://dlcdnrog.asus.com/rog/media/166864109730.webp' alt='card' />
            </div>
            <div class='cardText'>
              <p>WHAT IS A VAPOR CHAMBER, AND HOW DOES IT IMPROVE MY PC'S COOLING?</p>
            </div>
          </div>
        </div>

        <div class='cardLineTwo'>
          <div class='card'>
            <div class='cards_img'>
              <img src='https://dlcdnrog.asus.com/rog/media/1667344658657.webp' alt='card' />
            </div>
            <div class='cardText'>
              <p>HOW TO SET UP AND OPTIMIZE YOUR NEW ROG GAMING LAPTOP</p>
            </div>
          </div>
          <div class='card'>
            <div class='cards_img'>
              <img src='https://dlcdnrog.asus.com/rog/media/1665200765593.webp' alt='card' />
            </div>
            <div class='cardText'>
              <p>THE ROG STRIX GOLD AURA EDITION SERIES POWER SUPPLIES ARE READY TO LIGHT UP YOUR NEXT-GEN RIG</p>
            </div>
          </div>
        </div>
        <div class='learn'>
        <a>learn more</a>
        </div>
      </div>
    </>
  )
}

export default RecentStories