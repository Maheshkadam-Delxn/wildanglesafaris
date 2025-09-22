import React from 'react'
import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import PackagesSection from './components/Packages'
import Contact from './components/Contact'

const page = () => {
  return (
    <>
    <Hero/>
    <PackagesSection/>
    <TrustSection/>
    <Contact/>
    </>
  )
}

export default page