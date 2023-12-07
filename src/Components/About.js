import React from 'react'
import { Link } from 'react-router-dom'
import abby from "../assets/Abby.png"


const About = () => {
  return (

    <div className='about-section'>

      <div className='About'>

        

        <div className='About-text'>
          <h1>About Abby's Time</h1>
          <hr class="border border-success border-4"></hr>
          <p>Welcome to Abby's time Therapy Services!<br/>
          I work with clients who may be struggling with prenatal and post-natal depression or trauma related to baby loss, pregnancy choices, anxiety, and relationships or family issues of conflicts. During our initial sessions, we will delve deeply into the issues at hand, and collaborate to create an atmosphere to address them in a way that helps you to move forward in your life. Very non judgemental, and provides compassionate and evidence-based therapy to help you find the path to growth.<br/> I often use a Person-centered and integrative approach in my practice. In your first session, we'll explore what brought you to therapy and then decide the most appropriate ways to help you make progress.

            .</p>
          <div className='prof-body'>
            <img src='./images/membership.jpeg' alt='abbys'></img>
            <img src='./images/infantloss.png' alt='abby'></img>

          </div>

          <Link to='/about'><button className='rounded-pill' div id='about-button'>LEARN MORE</button></Link>

        </div>

        <div className='About-image'>

          <img src={abby} alt='abbys'></img>
        </div>


      </div>


    </div>


  )
}

export default About