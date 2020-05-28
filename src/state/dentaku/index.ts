import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Value = {
  input: number
  buffer: number
  result: number
}

type Dentaku = {
  value: Value
  mode: "input" | "buffer" | "result"
}

const initialState: Dentaku = {
  value: {
    input: 0,
    buffer: 0,
    result: 0
  },
  mode: "input"
}

const dentakuSlice = createSlice({
  name: 'dentaku',
  initialState,
  reducers: {
    reset: () => { return initialState },
    setInput: (state, action: PayloadAction<Dentaku['value']['input']>) => {
      state.mode = "input"
      state.value.input = action.payload
    },
    addInput: (state) => {
      state.mode = "buffer"
      state.value.buffer += state.value.input
      state.value.input = 0
    },
    calcResult: (state) => {
      state.mode = "result"
      state.value.result = state.value.buffer + state.value.input
      state.value.buffer = 0
      state.value.input = 0
    }
  }
})

export default dentakuSlice
