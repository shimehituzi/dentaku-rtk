import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Display = {
  input: number
  result: number
}

type Dentaku = {
  display: Display
}

const initialState: Dentaku = {
  display: {
    input: 0,
    result: 0
  }
}

const dentakuSlice = createSlice({
  name: 'dentaku',
  initialState,
  reducers: {
    reset: () => { return initialState },
    setInput: (state: Dentaku, action: PayloadAction<Dentaku['display']['input']>) => {
      state.display.input = action.payload
    }
  }
})

export default dentakuSlice
