import React from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleInc = () => {
    if (count < 50) setCount(count + 1)
    else alert('Reached Max count 50')
  }

  const handleDec = () => {
    if (count > 0) setCount(count - 1)
    else alert('Reached least count 0')
  }

  return (
    <div className="container">
      <h1 className="counter">{count}</h1>
      <button className="button" onClick={handleDec}>
        -
      </button>
      <button className="button" onClick={handleInc}>
        +
      </button>
    </div>
  )
}

export default App
