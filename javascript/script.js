// var cnfm = confirm("Are you 19...")
// console.log(cnfm)

// var alrt = alert("Its a warning!!!")
// console.log(alrt)

// var promppttt = prompt("Name...")
// console.log(promppttt)

// function walk(){
//     console.log("I am walking")
// }

// function sing(){
//     console.log("I am singing")
// }

// function dance(){
//     console.log("I am Dancing")
// }

// function greet(name){
//     console.log('Hello ', name)
// }

// var nam = prompt("What is your name")

// greet(nam)

// function hi(){
//     console.log('Normal function')
// }

// hi()

// var hi = function (){
//     console.log("1st order Function")
// }

// hi()
// var arrow = ()=>{
//     console.log("I am arrow function")
// }
// arrow()

// var array1 = [10,20,30,40,50]
// array1.push(60)
// array1.pop()
// console.log(array1)


// array1.forEach((values)=>{
//     console.log('I am',values)
// })

// var user1 ={
//     user: 'Basanta',
//     age: 22,
// }

// console.log(user1.age)    

// var obj1 ={
//     model:'iphone',
//     price: 70,
//     color:'Blue'
// }
// var obj2 ={
//     model:'google',
//     price: 20,
//     color:'red'
// }
// var obj3 ={
//     model:'samsung',
//     price: 50,
//     color:'black'
// }


// var user ={
//     userName: 'hii',
//     greeting: ()=>{
//         console.log("hello",user.userName)
//     }
// }

// user.greeting()


// This is an array of object example
// var arrayOfObject = [
//     {userName:'Basanta',age:11},
//     {userName:'khatri',age:11},
//     {userName:'aakash',age:21},
//     {userName:'ayush',age:11}
// ]

// console.log(arrayOfObject[0].age)



// -----------------------------------------------------------------DOM--------------------------------------------------------------\\

// DOM- Document Object Model

// There are 4 pillars of DOM

// 1.---Selection of an elment 
// var h1 = document.querySelector('h1')


// 2.---Changing HTML
// h1.innerHTML = 'Changed'


// 3.---Changing CSS
// h1.style.color = 'purple'
// h1.style.backgroundColor = 'grey'

// 4.---Event Listener
// h1.addEventListener('mouseenter',()=>{
//     h1.style.backgroundColor = 'orange'
//     h1.style.fontFamily = 'monospace'
// })



// names.forEach((value)=>{
    //     if(value!=='aayush')
    //     console.log(value)
// })

// let newArray = names.map((value)=>{
    //     return value + ' jii'
    // })
    
    // console.log(newArray)

    // let newArray = names.filter((value)=>{
//     if(value.length > 5){
    //         return true
    //     }
    // })
    
    // console.log(newArray)

    // Detailed user object
    // const user = {
        //     firstName: "John",
        //     lastName: "Doe",
//     age: 30,
//     email: "john.doe@example.com",
//     address: {
    //         street: "123 Main St",
    //         city: "Anytown",
    //         state: "CA",
    //         zipCode: "12345"
    //     },
    //     phoneNumber: "+1 (555) 123-4567",
    //     isActive: true,
    //     roles: ["user", "editor"],
    //     preferences: {
        //         theme: "dark",
//         notifications: true,
//         language: "en"
//     },
//     lastLogin: new Date(),
//     profilePicture: "https://example.com/profile-pic.jpg"
// };

// let {zipCode} = user.address
// let [first,second] = user.roles


//spread and rest
// const names =[ 'Basanta', 'Khatri', 'aakash', 'aayush','saroj']
// const copyArrays = [...names]


// Small object representing a book
// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925,
//     genre: "Novel"
// };

// const newObj = {...book}
// console.log(newObj)


function abcs(...rest){
    console.log(rest)
}

abcs(1,2,3,4,5,6)



















