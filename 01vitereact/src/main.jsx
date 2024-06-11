import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>My React learning</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
const anotherElement = (
  <a href='https://google.com' target='_blank'>Click me to open</a>
)

const reactElement = React.createElement(
  "a",
  {
    href:"https://google.com",
    target: '_blank'
  },
  "Click me"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    anotherElement
)
