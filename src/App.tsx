import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { ComingSoon } from './pages/ComingSoon';
import { LockPage } from './pages/LockPage';
import { View } from './pages/View';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          caseSensitive
          path='/'
          key='/'
          element={
            <ComingSoon />
          }
        />
        <Route
          caseSensitive
          path='*'
          key='*'
          element={
            <Navigate to={'/'} />
          }
        />
        <Route 
          caseSensitive
          path='/lock'
          key='/lock'
          element={
            <LockPage/>
          }
        />
        <Route
          caseSensitive
          path='/view'
          key='/view'
          element={
            <View />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App



