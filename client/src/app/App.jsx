import React from 'react'
import AppRouter from "../routes/AppRouter"
import useAuthCheck from '../features/auth/hooks/useAuthCheck'
import "./App.css";


const App = () => {
  const isAuthChecked = useAuthCheck();
  if(!isAuthChecked) return <div>Loading....</div>
  return <AppRouter />
}

export default App