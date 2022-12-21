import React from 'react'
import Footer from '../../components/Footer'
import JoinTheRepublic from '../../components/HomeComponents/JoinTheRepublic'
import MainSlider from '../../components/HomeComponents/MainSlider'
import RecentStories from '../../components/HomeComponents/RecentStories'
import RogInAction from '../../components/HomeComponents/RogInAction'
import SlickSlider from '../../components/HomeComponents/SlickSlider'
import Navbar from '../../components/Navbar'

function Home() {
  return (
   <>
   <Navbar />
   <MainSlider />
   <SlickSlider />
   <RecentStories />
   <RogInAction />
   <JoinTheRepublic />
   <Footer/>
   </>
  )
}

export default Home