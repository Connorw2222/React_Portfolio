import React, { useState } from "react";
import Person from "./Person";

const Greeting = () => {

  const [greet, setGreet] = useState(false)

  return (
    <div>
      {greet ?
        <>
          <Person
            name={"Connor"}
            age={24}
            hobbies={["coding", "school work", "skiing"]}
          />
          <button onClick={() => { setGreet(!greet) }}>Change Person</button>
        </>
        :
        <>
          <Person
            name={"Tyler"}
            age={"Old"}
            hobbies={["coding", "rock climbing", "skiing"]}
          />
          <button onClick={() => { setGreet(!greet) }}>Change Person</button>
        </>
      }
    </div>
  )
}

export default Greeting;