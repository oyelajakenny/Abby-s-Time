import React from 'react'
import { Link } from 'react-router-dom'

const Aboutpage = () => {
    return (
        <div className='about-page'>
            <h4>About Me</h4>
            <p>Welcome to Abby's time Therapy Services!<br/>

            Are you grappling with anxiety, depression, or various mental health challenges? Finding a secure and confidential space for professional help is crucial. Look no further than Abby's Time Therapy Services! With years of expertise, Abby is a psychotherapist specializing in assisting individuals in overcoming a spectrum of mental health issues. Whether it's navigating relationship struggles, coping with work stress, dealing with pre-natal and post-natal mental health concerns, facing academic pressures, or addressing traumatic experiences, Abby provides compassionate and evidence-based therapy to guide you toward growth. <br/>


                <strong>Why Choose Abby's Time therapy services:</strong><br />

                <strong>Data Protection:</strong> Your privacy is of utmost importance. Abby ensures the security of your personal information through the use of secure technology.<br />
                <strong> Flexibility:</strong> Making therapy accessible and convenient is a priority. <br/>Abby offers online therapy sessions via secure video conferencing, allowing you to receive therapy from the comfort of your home or office. Face-to-face services are also available to cater to your preferences. <br/>The online booking system makes scheduling sessions easy and convenient.<br />
                <strong>Ethical Framework :</strong> Abby adheres to the BACP ethical framework, providing a foundation of trust and professionalism in therapeutic services.
Abby specializes in working with clients facing challenges related to prenatal and post-natal depression, as well as trauma related to baby loss, pregnancy choices, anxiety, and conflicts in relationships or family dynamics. In the initial sessions, Abby delves deep into the issues at hand, fostering collaboration to create an atmosphere conducive to moving forward in life. Known for a non-judgmental approach, Abby utilizes a Person-centered approach in practice. The first session involves exploring the reasons for seeking therapy, followed by jointly deciding the most appropriate strategies to facilitate your progress.


                <br /> Abby looks forward to embarking on a journey towards healing and growth with you. Whether you prefer online or face-to-face sessions, Abby's Time Therapy Services is committed to providing the support you need in a safe and understanding environment.

                .</p>

            <Link to="/booking"><button>Book Now</button></Link>



        </div>
    )
}

export default Aboutpage