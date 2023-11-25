import { useState } from 'react'
import styles from './Counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(current => current + 1);
  }
  return (
    <>
    <h2>{counter}</h2>
    <button type="button" onClick={handleCounter} className={styles['counter']}>Increase</button>
    </>
  )
}
