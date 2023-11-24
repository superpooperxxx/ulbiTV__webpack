import { useState } from 'react'
import './Counter.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(current => current + 1);
  }
  return (
    <>
    <h2>{counter}</h2>
    <button type="button" onClick={handleCounter} className='counter'>Increase</button>
    </>
  )
}
