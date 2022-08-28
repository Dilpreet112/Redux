import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'


function Shop() {
  
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)

  return (
    <div>
      <h2>Deposit / Withdraw Money</h2>
      <button className='btn btn-primary mx-2' onClick={() => { withdrawMoney(100) }}>-</button>
      Updated balance: {(balance)}
      <button className='btn btn-primary mx-2' onClick={() => { depositMoney(100) }}>+</button>
    </div>
  )
}

export default Shop