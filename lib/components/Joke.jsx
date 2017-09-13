import React from 'react';

const Joke = (props) => {
  let { jokeObject } = props;
  return (
    <li key={jokeObject.id}>{jokeObject.joke}</li>
  )
}

export default Joke;
