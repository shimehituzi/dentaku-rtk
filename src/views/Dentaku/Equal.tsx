import React from 'react'

import { useAppSelector, useAppDispatch, actions } from 'state'


export const Equal: React.FC = () => {
  const { mode } = useAppSelector(state => state.dentaku)

  const dispatch = useAppDispatch()
  const equal = () => {
    mode !== "result" && dispatch(actions.dentaku.calcResult())
  }

  return (
    <button onClick={equal}>=</button>
  )
}
