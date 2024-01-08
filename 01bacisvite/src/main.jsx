import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const reactElement = {
  type: 'a' ,
  props: {
      href: "https://google.com",
      target:'_blank'
  },
  children:'click me to visit google'
}

const Anotherele= ( 
  <a href="http://google.com" target="_blank">visit google</a>
)

const username="laksh";
const Actualreact=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click to visit google',
  username
)
function MyApp(){
  
  return( 
    <div>
      <h1>custom react app { username}</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Actualreact/>

)
