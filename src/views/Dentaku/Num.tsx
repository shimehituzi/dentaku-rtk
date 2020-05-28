import React from 'react'

import { useAppSelector, useAppDispatch, actions } from 'state'


type Props = {
  num: number
}

export const Num: React.FC<Props> = ({num}) => {
  const { input } = useAppSelector(state => state.dentaku)

  const dispatch = useAppDispatch()
  const inputNumber = () => {
    dispatch(actions.dentaku.setInput(input * 10 + num))
  }

  return (
    <button onClick={inputNumber}>{num}</button>
  )
}
