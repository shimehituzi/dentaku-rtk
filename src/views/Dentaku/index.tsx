import React from 'react'

import { Num } from './Num'
import { Display } from './Display'
import { Equal } from './Equal'
import { Plus } from './Plus'
import { Reset } from './Reset'


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
        <Plus/>
        <Equal/>
      </div>
      <div>
        <Reset/>
      </div>
    </React.Fragment>
  )
}

export default Dentaku
