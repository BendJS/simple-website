import React from "react";
import styled from "styled-components";

import "../App.scss";

const Form = styled.form`
  
  label {
    span {
      display: block;
      margin: 0 0 0.5rem 0;
    }
  }

  input {
    width: auto;
    border: none;
    border: 1px solid #ccc;
    font-size: 1.5rem;
    padding: 0.5rem
    margin: 0 0 1rem 0;
    border-radius: 4px;
  }
`;

export default function SignupForm({ children }) {
  return (
    <Form name="newsletter" netlify method="post">
      <input type="hidden" name="form-name" value="newsletter" />
      <label>
        <span>Full Name</span>
        <input type="text" name="name" />
      </label>
      <label>
        <span>Email Address</span>
        <input type="email" name="email" />
      </label>

      <button className="button" type="submit">
        Sign up
      </button>
    </Form>
  );
}
