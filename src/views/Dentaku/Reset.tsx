import React from 'react'

import { useAppDispatch, actions } from 'state'

export const Reset: React.FC = () => {
  const dispatch = useAppDispatch()
  const ac = () => {
    dispatch(actions.dentaku.reset())
  }

  return (
    <button onClick={ac}>AC</button>
  )
}
