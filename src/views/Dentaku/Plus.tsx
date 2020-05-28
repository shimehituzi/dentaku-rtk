import React from 'react'

import { useAppSelector, useAppDispatch, actions } from 'state'


export const Plus: React.FC = () => {
  const { mode } = useAppSelector(state => state.dentaku)
  
  const dispatch = useAppDispatch()
  const plus = () => {
    mode === "input" && dispatch(actions.dentaku.addInput())
  }

  return (
    <button onClick={plus}>+</button>
  )
}
