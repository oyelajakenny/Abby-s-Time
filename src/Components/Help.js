import React from 'react'
import { Link } from 'react-router-dom'


const Help = () => {
  return (
    <div className='help'>
<div className='help-text'><h3>Want to talk to me?</h3></div>
<Link to= '/booking'><button>Click Here</button></Link>

    </div>

    
  )
}

export default Help