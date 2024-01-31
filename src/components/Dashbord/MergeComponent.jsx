import React from 'react'
import Header from './Header'
import PickupTab from './PickupTab'
import DashboardCardContainer from "../carCards/DashboardCardContainer";
import MiddleCard from './MiddleCard';
import Footer from './Footer';

const MergeComponent = () => {
  return (
    <>
    <Header/>
    <PickupTab/>
    <DashboardCardContainer/>
    <MiddleCard/>
    <Footer/> 
    </>
  )
}

export default MergeComponent