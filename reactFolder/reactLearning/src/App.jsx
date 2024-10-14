// function  app(){
//   return <h1>Hello</h1>
// }

import { useState } from "react";

// export default app

// function app() {
//   return ( <h1>Hi from react app</h1> );
// }

// export default app;

// function userDetails(){
//   const [user, setUSER] = useState('Basanta')
//   const changeName =()=>{
//     setUSER('Khatri')
//   }
//   return(
//     <div>
//       <h1>Hello {user}</h1>
//       <button onClick={changeName}>change user</button>
//     </div>
//   )
// }

// export default userDetails;

// function counter(){
//   const [value,setValue] = useState(0)
//   return(
//     <div>
//       <h1>Your number is {value}</h1>
//       <button onClick={()=>setValue(value-1)}>Increment</button>
//       <button onClick={()=>setValue(value+1)}>Decrement</button>
//     </div>
//   )
// }

// export default counter;

function calling(){
    const[value,setValue] = useState('Click the button below to start voice maxing')
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={()=>setValue(' voice maxing started')}>Change Text</button>
        </div>
    )
}

export default calling;

