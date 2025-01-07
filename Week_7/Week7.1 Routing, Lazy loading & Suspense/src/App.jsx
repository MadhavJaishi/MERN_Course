import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
const Dashboard = lazy(() => import("./components/Dashboard"))
const Landing = lazy(() => import('./components/Landing'))
import './App.css'

function App() {
  // Suspense API is required here as we are using lazy()
  // lazy() is used for content to be brought up lazily from server
  return <div>
    <BrowserRouter>
      <AppBar/>
      <Routes>
        <Route path="/" element={<Suspense fallback="...Loading"><Landing/></Suspense>}></Route>
        <Route path="/dashboard" element={<Suspense fallback="..Wait a moment"><Dashboard/></Suspense>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}
function AppBar() {
  const navigate = useNavigate();
  return <div>
    <div>
      <button onClick={() => {navigate('/')}}>Landing page</button>
      <button onClick={() => {navigate('/dashboard')}}>Dashboard page</button>
    </div>
  </div>
}
export default App
