import React, { useState } from 'react';
import '../App.scss';

export default function SignupForm({children}) {
  const [submitted, setSubmitted] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setSubmitted(true);
    // onClick={e => handleClick(e)}
  }

  if (submitted) {
    return (
      <div>
        <h4>Thank you for your submission! Keep an eye out for our newsletters 😀</h4>
      </div>
    )
  }
  return (
    <form name="newsletter" netlify className="members">
      <input type="hidden" name="form-name" value="newsletter" />
      <input type="text" name="name" className="signup" placeholder="YOUR NAME" />
      <input type="email" name="email" className="signup" placeholder="YOUR EMAIL" />
      <button className="button" type="submit">Sign up</button>
    </form>
  )
}