import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Thanks from './Thanks';
import reCAPTCHA from "react-google-recaptcha"


const Bookingform = () => {
  const onChange = () => {};
  const [state, handleSubmit] = useForm("xjvddzbq");
  if (state.succeeded) {
    return <Thanks />;
  }
  return (
    <div className='booking-form'>
      <h2>Appointment Booking Form</h2>
      <p>Fill the form below to book an appointment with Me.</p>
     <p> I am available from Monday to Friday, from 9am to 4pm</p>
      <p>You can reach me via email on info@abbystme.com, call or WhatsApp +447787986526 </p>
      <h5>Please note that counselling cost £50 per session and half a session is £25 <br/>based on previously agreed circumstances</h5>
      <p>You will be redirected to a payment page immediately you submit the booking form</p>

      <form className='bookingform-m' onSubmit={handleSubmit}>
        <input type="text" name='firstname' placeholder="First Name" required></input>

        <ValidationError
          prefix="First Name"
          field="firstname"
          errors={state.errors}
        />
        <input type="text" name='lastname' placeholder="Last Name"></input><br />
        <ValidationError
          prefix="Last Name"
          field="lastname"
          errors={state.errors}
        />

        <input type="email" name='email' placeholder="Enter Your Email Address"></input>
        <ValidationError
          prefix="email"
          field="email"
          errors={state.errors}
        />
        <input type="tel" name='tel' placeholder="Enter Your Phone Number"></input>
        <ValidationError
          prefix="Phone Number"
          field="tel"
          errors={state.errors}
        />
        <br />
        <input type="Date" name='date' placeholder="Pick a Date" required></input>
        <ValidationError
          prefix="Date"
          field="date"
          errors={state.errors}
        />

        <input type="time" name='time' placeholder="Choose a Time"></input>
        <ValidationError
          prefix="Last Name"
          field="time"
          errors={state.errors}
        />
        <br />
        <textarea rows="15" cols="75" name='message'>

        </textarea>

        <br />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
         {/* <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />  */}
        <button type="submit" disabled={state.submitting}>SUBMIT</button>


      </form>
      <form className='booking-m' onSubmit={handleSubmit}>
        <input type="text" name='firstname' placeholder="First Name" required></input>

        <ValidationError
          prefix="First Name"
          field="firstname"
          errors={state.errors}
        />
        <input type="text" name='lastname' placeholder="Last Name"></input><br />
        <ValidationError
          prefix="Last Name"
          field="lastname"
          errors={state.errors}
        />

        <input type="email" name='email' placeholder="Enter Your Email Address"></input>
        <ValidationError
          prefix="email"
          field="email"
          errors={state.errors}
        />
        <input type="tel" name='tel' placeholder="Enter Your Phone Number"></input>
        <ValidationError
          prefix="Phone Number"
          field="tel"
          errors={state.errors}
        />
        <br />
        <label for="Date">Pick a Date:</label><br />
        <input type="Date" name='date' placeholder="Pick a Date" required></input>
        <ValidationError
          prefix="Date"
          field="date"
          errors={state.errors}
        />
        <label for="Time">Choose a Time:</label><br />

        <input type="time" name='time' placeholder="Choose a Time"></input>
        <ValidationError
          prefix="Last Name"
          field="time"
          errors={state.errors}
        />
        <br />
        <textarea rows="10" cols="30" name='message'>

        </textarea>

        <br />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>SUBMIT</button>


      </form>

    </div>
  )
}

export default Bookingform