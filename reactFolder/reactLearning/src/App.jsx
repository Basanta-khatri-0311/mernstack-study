// function  app(){
//   return <h1>Hello</h1>
// }

import { useState } from "react";

// export default app

// function app() {
//   return ( <h1>Hi from react app</h1> );
// }

// export default app;

function userDetails(){
  const [user, setUSER] = useState('Basanta')
  const changeName =()=>{
    setUSER('Khatri')
  }
  return(
    <div>
      <h1>Hello {user}</h1>
      <button onClick={changeName}>change user</button>
    </div>
  )
}

export default userDetails;