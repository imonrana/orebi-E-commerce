import React from 'react'
import Banner from '../../Banner/Banner'
import AdditionalInfo from '../../AdditionalInfo/AdditionalInfo'
import Advertises from '../../Advertise/Advertises'
import NewArrival from '../../NewArrival/NewArrival'
import BestSeller from '../../BestSeller/BestSeller'
import Addvertizetwo from '../../AddvertizeTwo/Addvertizetwo'
import SpeacialOffer from '../../SpeacialOffer/SpeacialOffer'


const Home = () => {
  return (
   <>
   <main>
   <Banner/>
   <AdditionalInfo/>
   <Advertises/>
   <NewArrival/>
   <BestSeller/>
   <Addvertizetwo/>
   <SpeacialOffer/>
   </main>
   </>
  )
}

export default Home