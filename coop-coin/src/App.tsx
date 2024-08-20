import AppLayout from "./AppLayout"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"

import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
    
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
    
    </>
  )
}

export default App
