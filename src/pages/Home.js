import React from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Services from '../components/Services'
import About from '../components/About'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Members from '../components/Members'
import End from '../components/End'

function Home() {
  return <>
  <Navigation></Navigation>
  <Header></Header>
  <Services></Services>
  <About></About>
  <Projects></Projects>
  <Members></Members>
  <Footer></Footer>
  <End></End>
  </>
  
}
export default Home
