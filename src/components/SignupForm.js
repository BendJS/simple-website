import React from 'react';
import styled from 'styled-components';
import '../App.scss';

const Form = styled.form`
  display: flex;
  width: 100%;
  margin: 10px 0;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row wrap;

  input {
    width: auto;
    border: none;
    border-bottom: 2px solid grey;
    margin-right: 2rem;
    font-size: 1.5rem;
    padding: 3px 10px;
    &:focus {
      outline: none;
    }
  }
`;

export default function SignupForm({children}) {
  return (
    <Form name="newsletter" netlify method="post">
      <input type="hidden" name="form-name" value="newsletter" />
      <input type="text" name="name" placeholder="YOUR NAME" />
      <input type="email" name="email" placeholder="YOUR EMAIL" />
      <button className="button" type="submit">Sign up</button>
    </Form>
  )
}