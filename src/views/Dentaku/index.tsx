import React from 'react'

import { Num } from 'views/Dentaku/Num'
import { Display } from 'views/Dentaku/Display'


const Dentaku: React.FC = () => {
  return (
    <React.Fragment>
      <Display/>
      <div>
        <Num num={1}/>
        <Num num={2}/>
        <Num num={3}/>
      </div>
      <div>
        <Num num={4}/>
        <Num num={5}/>
        <Num num={6}/>
      </div>
      <div>
        <Num num={7}/>
        <Num num={8}/>
        <Num num={9}/>
      </div>
      <div>
        <Num num={0}/>
      </div>
    </React.Fragment>
  )
}

export default Dentaku
