import React from 'react';
import Joke from './Joke';

const JokeList = (props) => {
  let { jokesArray } = props;
  if(!jokesArray.length) {
    return (
      <p>Click to add some jokes!</p>
    )
  }

  return (
    <div>
      <ul>
        {
          props.jokesArray.map((jokeObject) => {
            return <Joke jokeObject={jokeObject} />
          })
        }
      </ul>
    </div>
  )
}

export default JokeList;
