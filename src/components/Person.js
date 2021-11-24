import React, { useState } from "react";

const Person = (props) => {
  return(
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <ul>
      {props.hobbies.map((hobby, i) => {
        return <li key={i}>{hobby}</li>
      })}
      </ul>
    </div>
  )
}

export default Person;