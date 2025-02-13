import { configureStore } from '@reduxjs/toolkit'
import { ContentApi } from './services/Content'
import  Sidebar  from './slice/sidebar/Sidebar'
export const store = configureStore({
  reducer: {
 
    Sidebar,
    [ContentApi.reducerPath]: ContentApi.reducer,
 

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      ContentApi.middleware,
  
    ])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
