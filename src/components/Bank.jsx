import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeCustomerAction } from '../store/customReducer'
import css from './Bank.module.css'

const Bank = () => {
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cash.cash)
  const customers = useSelector((state) => state.customers.customers)
  console.log(customers)

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCestomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className={css.bank__main}>
      <div style={{ display: 'flex' }}>
        <div>{cash.cash}</div>

        <div>
          <button onClick={() => addCash(Number(prompt()))}>Положить</button>
          <button onClick={() => getCash(Number(prompt()))}>Снять</button>
          <button onClick={() => addCustomer(prompt())}>
            Добавить клиента
          </button>
          <button onClick={() => getCash(Number(prompt()))}>
            Удалить клиента
          </button>
        </div>

        <div>
          {customers.length > 0 ? (
            <div>
              <h1>Список загружается</h1>
              {customers.map((customer) => (
                <div onClick={() => removeCestomer(customer)} key={customer.id}>
                  {customer.name}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>Клиентов нет</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Bank
