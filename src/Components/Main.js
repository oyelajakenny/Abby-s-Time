import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='main'>

      <div className='main-description'>

      <h1>Abby's Time</h1>
        <h2>Your Certified Psychotherapist</h2>
      
        <p>Do you find yourself struggling with anxiety, depression, or other mental health issues?<br/>
         Are you looking for a safe and confidential space to talk about your problems and receive professional help? <br/>Look no further than Abby's time therapy services!</p>
      
      <div className='main-bttn '>
      <Link to= '/contact'><button>Contact Us </button></Link>
        
        <Link to= '/booking'><button>Get Help</button></Link>
      </div>
      </div>

      {/* <div className='main-img'>

          <img className='img-fluid' src='./images/abbysss.png' alt='abbys'></img> 

         <div className='main-bttn mobile'>
          <Link to= '/contact'><button>Contact Us </button></Link>
        
        <Link to= '/booking'><button>Get Help</button></Link>
        
      </div>
        
      </div> */}
        
     
    </div>
  )
}

export default Main