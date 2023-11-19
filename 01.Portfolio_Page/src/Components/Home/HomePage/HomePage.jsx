import React from 'react'
import Header from '../Header/Header' ;
import Card from '../Card/Card'; 
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div className='homepage'>
        <Header />
        <Card />
        <Featured />
        <Footer />
    </div>
  )
}

export default HomePage
