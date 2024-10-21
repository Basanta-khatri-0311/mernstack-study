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

// function faram(){
//     const [username, setUsername] = useState('')
//     const handeler =(e)=>{
//         e.preventDefault()
//         console.log(username)
//         setUsername('')
//     }
//     return (
//         <div>
//             <form onSubmit={(e)=>{
//                 handeler(e)
//             }}>
//                 <input
//                 value={username}
//                 onChange={(e)=>{
//                     setUsername(e.target.value)
//                 }}
//                 className="px-4 py-3 m-5 font-semibold rounded" type="text" placeholder="username" />
//                 <button className="px-4 py-3 m-5 rounded text-white bg-emerald-600"> submit </button>
//             </form>
//         </div>
//     )
// }
// export default faram ;

// function aafai(){
//     const [username, setUsername] = useState('')

//     const handeler = (e)=>{
//         e.preventDefault()
//         console.log(username)
//         setUsername('')
//     }
//     return(
//         <div>
//             <form onSubmit={(e)=>{
//                 handeler(e)
//             }}>
//                 <input
//                 value={username}
//                 onChange={(e)=>{
//                     setUsername(e.target.value)
//                 }}
//                 className="px-4 py-3 m-5 rounded" type="text" placeholder="username"/>
//                 <button className="px-4 py-3 m-5 rounded bg-emerald-700">submit</button>
//             </form>
//         </div>
//     )
// }

// export default aafai;

// function last(){

//     const [username,setUsername] = useState('')

//     const eventHandeller = (e)=>{
//         e.preventDefault()
//         console.log(username)
//         setUsername('')
//     }

//     return(
//         <div>
//             <form  onSubmit={(e)=>{
//                 eventHandeller(e)
//             }}>
//                 <input
//                 value={username}
//                 onChange={(e)=>{
//                     setUsername(e.target.value)
//                 }}
//                 className="px-4 py-3 m-5 rounded bg-white " type="text" name="" id="" placeholder="UserName" />
//                 <button className="px-4 py-3 m-5 rounded bg-emerald-600">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default last;

// function final(){

//     const [userName, setUserName] = useState('')

//     const handeller = (e)=>{
//         e.preventDefault()
//         console.log(userName)
//         setUserName('')
//     }
//     return(
//         <div>
//             <form onSubmit={(e)=>{
//                 handeller(e)
//             }} >
//                 <input
//                 value={userName}
//                 onChange={(e)=>{
//                     setUserName(e.target.value)
//                 }}
//                 className="px-4 py-3 m-5 rounded " type="text" name="" id="" placeholder="UserName" />
//                 <button className="px-4 py-3 m-5 rounded bg-emerald-600 text-white ">Submit</button>
//             </form> bg-emerald-600 text-white
//         </div>
//     )
// }

// export default final

// function  last(){
//     const [user,setUser] = useState('')
//     const handeler = (e)=>{
//         e.preventDefault()
//         console.log(user)
//         setUser('')
//     }
//     return(
//         <div>
//             <form onSubmit={(e)=>{
//                 handeler(e)
//             }}>
//                 <input
//                 value={user}
//                 onChange={(e)=>{
//                     setUser(e.target.value)
//                 }}
//                 type="text" name="" id="" placeholder="username" />
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default last


// function last(){

//     const [user, setUser] = useState('')

//     const handel =(e)=>{
//         e.preventDefault()
//         console.log(user)
//         setUser('')
//     }
//     return(
//         <div>
//         <form onSubmit={(e)=>{
//             handel(e)
//         }}>
//             <input
//             value={user}
//             onChange={(e)=>{
//                 setUser(e.target.value)
//             }}
//             className="px-4 py-3 m-5 rounded" 
//             type="text" name="" id="" placeholder="User-Name" />
//             <button className="px-4 py-3 m-5 rounded bg-emerald-800 text-white">Submit</button>
//         </form>
//         </div>
//     )
// } 

// export default last;


function App(){

    const [username, setUsername] = useState('')

    const handeler =(e)=>{
        e.preventDefault()
        setUsername('')
        console.log(username)
    }
    return(
        <div>
            <form onSubmit={(e)=>{
                handeler(e)
            }}>
                <input
                value={username}
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                className="px-4 py-3 m-10 rounded text-xl text-black" 
                type="text" name="" id="" placeholder="User-Name" />
                <button className="px-4 py-3 m-10 rounded bg-emerald-900 text-xl">Submit</button>
            </form>
        </div>
    )
}

export default App;