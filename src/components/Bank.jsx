import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import css from './Bank.module.css'

const Bank = () => {
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cash)
  console.log(cash)

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }
  return (
    <div className={css.bank__main}>
      <div style={{ display: 'flex' }}>
        <div>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Положить</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять</button>
      </div>
    </div>
  )
}

export default Bank
