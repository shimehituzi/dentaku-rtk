import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Dentaku = {
  input: number
  result: number
}

const initialState: Dentaku = {
  input: 0,
  result: 0
}

const dentakuSlice = createSlice({
  name: 'dentaku',
  initialState,
  reducers: {
    reset: () => { return initialState },
    setInput: (state: Dentaku, action: PayloadAction<Dentaku['input']>) => {
      state.input = action.payload
    }
  }
})

export default dentakuSlice
