import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Thanks from './Thanks';

const Contactform = () => {
  const [state, handleSubmit] = useForm("xjvddzbq");
  if (state.succeeded) {
      return <Thanks />;
  }
  return (
    <div className='contact-form'>

      <h2>Contact Us</h2>
      <p>Fill the form below to drop me a quick message<br/>You can reach me via email on info@abbystme.com, call or WhatsApp +447787986526 </p>
      <form className='desktop' onSubmit={handleSubmit}>

        <input type="text" name='firstname' placeholder="First Name" required ></input>
        <ValidationError 
        prefix="First Name" 
        field="firstname"
        errors={state.errors}
      />
        <input type="text" name='lastname' placeholder="Last Name" required></input>
        <ValidationError 
        prefix="Last Name" 
        field="lastname"
        errors={state.errors}
      />
        <br />
        <input type="email" name='email' placeholder="Enter Your Email Address" required></input> 
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <input type="tel" name='tel' placeholder="Enter Your Phone Number" required></input>
        <ValidationError 
        prefix="Telephone Num" 
        field="tel"
        errors={state.errors}
      />
        <br />
        <textarea rows="10" name='msg' cols="75" placeholder='Write your message here' required>

          
        </textarea>
        <ValidationError 
        prefix="Message" 
        field="msg"
        errors={state.errors}
      />

        <br />
        <button type="submit" disabled={state.submitting}>SUBMIT</button>


      </form>

      <form className='mobile-form' onSubmit={handleSubmit}>

        <input type="text" name='firstname' placeholder="First Name" required ></input>
        <ValidationError 
        prefix="First Name" 
        field="firstname"
        errors={state.errors}
      />
        <input type="text" name='lastname' placeholder="Last Name" required></input>
        <ValidationError 
        prefix="Last Name" 
        field="lastname"
        errors={state.errors}
      />
        <br />
        <input type="email" name='email' placeholder="Enter Your Email Address" required></input> 
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <input type="tel" name='tel' placeholder="Enter Your Phone Number" required></input>
        <ValidationError 
        prefix="Telephone Num" 
        field="tel"
        errors={state.errors}
      />
        <br />
        <textarea rows="10" name='msg' cols="30" placeholder='Write your message here' required>

          
        </textarea>
        <ValidationError 
        prefix="Message" 
        field="msg"
        errors={state.errors}
      />

        <br />
        <button type="submit" disabled={state.submitting}>SUBMIT</button>


      </form>
    </div>
  )
}

export default Contactform