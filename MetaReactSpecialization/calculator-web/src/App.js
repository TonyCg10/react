import { useState } from 'react'

function App() {
  const [valueA, setvalueA] = useState(0)
  const [valueB, setvalueB] = useState(0)
  const [result, setResult] = useState(0)

  return (
    <div style={{ flexDirection: 'column' }}>
      <p style={{ fontSize: 22, fontWeight: '600' }}>
        Simplest Working Calculator
      </p>
      <p style={{ textAlign: 'center' }}>{result}</p>
      <div>
        <input
          style={{
            height: 20,
            width: 50,
            textAlign: 'center',
            marginLeft: '20%',
          }}
          onChange={(e) => setvalueA(Number(e.target.value))}
          value={valueA}
        />
        <input
          style={{
            height: 20,
            width: 50,
            textAlign: 'center',
            marginLeft: '20%',
          }}
          onChange={(e) => setvalueB(Number(e.target.value))}
          value={valueB}
        />
      </div>
      <div style={{textAlign:'center', marginTop: '3%'}}>
        <div>
          <button
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              margin: 5,
            }}
            onClick={() => setResult(valueA + valueB)}
          >
            Add
          </button>
          <button
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              margin: 5,
            }}
            onClick={() => setResult(valueA - valueB)}
          >
            Subtract
          </button>
        </div>
        <div>
          <button
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              margin: 5,
            }}
            onClick={() => setResult(valueA / valueB)}
          >
            Divide
          </button>
          <button
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              margin: 5,
            }}
            onClick={() => setResult(valueA * valueB)}
          >
            Multiply
          </button>
        </div>
        <div>
          <button
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              margin: 5,
              color: 'white',
              backgroundColor: 'red',
            }}
            onClick={() => {
              setvalueA(0)
              setvalueB(0)
            }}
          >
            Reset input
          </button>
          <button
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              margin: 5,
              color: 'white',
              backgroundColor: 'red',
            }}
            onClick={() => setResult(0)}
          >
            Reset result
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
