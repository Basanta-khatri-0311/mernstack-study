// var h1 = document.createElement('h1')
// var root = document.getElementById('root')
// h1.innerHTML ='Hello from javascript'
// root.appendChild(h1)

var h1 = React.createElement('h1',null,'Hello from React')
var root = document.querySelector('#root')
var renderer = ReactDOM.createRoot(root)
renderer.render(h1)

