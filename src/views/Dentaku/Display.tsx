import React from 'react'

import { useAppSelector } from 'state'


export const Display: React.FC = () => {
  const { value, mode } = useAppSelector(state => state.dentaku)

  return (
    <div>
      {
        mode === "input"  ? value.input :
        mode === "buffer" ? value.buffer :
        value.result
      }
    </div>
  )
}
