import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0)

  const data = [
    {
      id: 1,
      title:"FREE", 
      pricing:0, 
      features:[{title:"one",isavailable:true, }],
      mark1: "✔️",
      mark2: "✔️",
      mark3: "✔️",
      mark4: "✔️",
      mark5: "✖️",
      mark6: "✖️",
      mark7: "✖️",
      mark8: "✖️",
      e1: "Single User",
      e2: "50GB Storage",
      e3: "Unlimited Public Projects",
      e4: "Community Access",
      e5: "Unlimited Private Projects",
      e6: "Dedicated Phone Support",
      e7: "Free Subdomain",
      e8: "Monthly Status Reports",
    },
    {
      id: 2,
      title:"PLUS", 
      pricing:9, 
      features:[{title:"second",isavailable:true, }],
      mark1: "✔️",
      mark2: "✔️",
      mark3: "✔️",
      mark4: "✔️",
      mark5: "✔️",
      mark6: "✔️",
      mark7: "✔️",
      mark8: "✖️",
      e1: "5 Users",
      e2: "50GB Storage",
      e3: "Unlimited Public Projects",
      e4: "Community Access",
      e5: "Unlimited Private Projects",
      e6: "Dedicated Phone Support",
      e7: "Free Subdomain",
      e8: "Monthly Status Reports",
    },
    {
      id: 3,
      title:"PRO", 
      pricing:49, 
      features:[{title:"three",isavailable:true, }],
      mark1: "✔️",
      mark2: "✔️",
      mark3: "✔️",
      mark4: "✔️",
      mark5: "✔️",
      mark6: "✔️",
      mark7: "✔️",
      mark8: "✔️",
      e1: "Unlimited Users",
      e2: "50GB Storage",
      e3: "Unlimited Public Projects",
      e4: "Community Access",
      e5: "Unlimited Private Projects",
      e6: "Dedicated Phone Support",
      e7: "Free Subdomain",
      e8: "Monthly Status Reports",
    }
  ];

  return (
    <>
      <div className='Container'>
        <div className='Row'>
          {data.map((e) => (
            <Card e={e} key={`e-card-${e.id}`}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
