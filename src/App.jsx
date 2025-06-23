import './App.css'
import Dashboard from './components/dashboard'
import { Routes, Route } from 'react-router-dom'    
import Navbar from './components/navbar'
import ProblemDetail from './components/problemDetail'


function App() {

  return (
    <>

    <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/problem/:id" element={<ProblemDetail />} />
     </Routes>
      
    </>
  )
}
export default App
