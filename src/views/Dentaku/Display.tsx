import React from 'react'

import { useAppSelector } from 'state'


export const Display: React.FC = () => {
  const { input } = useAppSelector(state => state.dentaku.display)

  return (
    <div>{input}</div>
  )
}
