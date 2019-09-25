import React from 'react';

export default function Member(props) {
  console.log(props);
  return (
    <div>{props.match.params.name}'s member page</div>
  )
}