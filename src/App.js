import {useEffect, useState} from 'react';

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch(' http://localhost:3001/solutions')
      .then((response) => response.json())
      .then((data) => {
        const randomSolution = data[Math.floor(Math.random() * data.length)]

        setSolution(randomSolution.word)
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle app</h1>
      { solution && <div>Solution is: { solution }</div> }
    </div>
  )
}

export default App
