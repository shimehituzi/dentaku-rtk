import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

import dentakuSlice from 'state/dentaku'


export const store = configureStore({
  reducer: {
    [dentakuSlice.name]: dentakuSlice.reducer
  }
})

export const actions = {
  [dentakuSlice.name]: dentakuSlice.actions
}

export type AppState = ReturnType<typeof store.getState>
export const useAppSelector: <TSelected>(
  selector: (state: AppState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean,
) => TSelected = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
