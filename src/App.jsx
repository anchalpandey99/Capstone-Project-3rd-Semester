import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './screens/Home'
import Menu from './screens/Menu'
import Orders from './screens/Orders'


function App() {
  

  return (
    <>
        <Router>
      <NavBar />
      <div className="container mt-4">
        
      </div>
    </Router>
      
    
    </>
     
    
  )
}

export default App
