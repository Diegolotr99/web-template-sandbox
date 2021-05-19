import React, { Fragment, useEffect } from 'react'
import '../public/assets/scss/landing.scss'
import Head from 'next/head'
// import Custom Components
import Header from '../landing/header'
import GiftSection from '../landing/git-section'
import DemoSection from '../landing/demo'
import PortfolioSection from '../landing/portfolio'
import WhatinsideSection from '../landing/whatinside'
import BlogSection from '../landing/blog'
import ElementSection from '../landing/elements'
import FeaturesSection from '../landing/features'
import TestimonialSection from '../landing/testimonial'
import RatSection from '../landing/rat'
import FooterSection from '../landing/footer'

const Home = () => {

  useEffect(() => {
      document.body.style.setProperty('--primary', '#222D39')
      document.body.style.setProperty('--secondary', '#4DAF75')
      document.body.style.setProperty('--light', '#9647DB')
      document.body.style.setProperty('--dark', '#52419A')
  })

  return (
    <Fragment>
      <div className="landing-page">
      <Head>
        <title>Sherpa Mindset</title>
      </Head>

      <Header />

      <GiftSection />

      <DemoSection />

      <PortfolioSection />

      <WhatinsideSection />

      <BlogSection />

      <ElementSection />

      <FeaturesSection />

      <TestimonialSection />

      <RatSection />

      <FooterSection />
      </div>
    </Fragment>
  )
}

export default Home
