import React from 'react'
import Carousels from '../components/Carousel/Carousels';
import Products from './Products';

const Home = () => {
  return (<>
    <main className='main-section'>
      <div className="carousal-section">
        <Carousels/>
      </div>
      <div className="products-section">
        <Products/>
      </div>
    </main>
    </>
  )
}

export default Home