import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Cardapio from './pages/Cardapio/Cardapio'
import Admin from './pages/Admin/Admin'
import AdminMaster from './pages/AdminMaster/AdminMaster'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Cardapio />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-master" element={<AdminMaster />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
