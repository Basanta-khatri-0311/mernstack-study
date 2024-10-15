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

// function calling(){
//     const[value,setValue] = useState('Click the button below to start voice maxing')
//     return (
//         <div className="first">
//             <h1 className="heading">{value}</h1>
//             <div className="second">
//             <button onClick={()=>setValue(' voice maxing started')}>Change Text</button>
//             </div>
//         </div>
//     )
// }

// export default calling;
//form handeling in react 

// function formss(){
//     const submitHandler = (e)=>{
//         e.preventDefault()
//         console.log('submite',e)
//     }
//     return(
//         <div>
//             <form onSubmit={(e)=>{
//                 submitHandler(e)
//             }}>
//                 <input className="px-4 py-3 text-xl m-5 rounded" type="text" name="" id="" placeholder="username" />
//                 <button className="px-4 py-3 m-5 text-xl text-white font-semibold bg-emerald-500 rounded">submit</button>
//             </form>
//         </div>
//     )
// }

// export default formss;















function faram(){

    const handeler =(e)=>{
        e.preventDefault()
        console.log(e)
    }
    return (
        <div>
            <form onSubmit={(e)=>{
                handeler(e)
            }}>
                <input className="px-4 py-3 m-5 font-semibold rounded" type="text" placeholder="username" />
                <button className="px-4 py-3 m-5 rounded text-white bg-emerald-600"> submit </button>
            </form>
        </div>
    )
}






export default faram ;
