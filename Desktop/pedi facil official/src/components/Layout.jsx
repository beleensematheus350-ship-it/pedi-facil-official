import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

export default function Layout({ children }) {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="app-layout">
      <nav className="app-navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            🍽️ Pedi Fácil
          </Link>
          
          <ul className="navbar-menu">
            <li>
              <Link 
                to="/cardapio" 
                className={`nav-link ${isActive('/cardapio') || isActive('/') ? 'active' : ''}`}
              >
                📋 Cardápio
              </Link>
            </li>
            <li>
              <Link 
                to="/admin" 
                className={`nav-link ${isActive('/admin') ? 'active' : ''}`}
              >
                🏪 Admin Restaurante
              </Link>
            </li>
            <li>
              <Link 
                to="/admin-master" 
                className={`nav-link ${isActive('/admin-master') ? 'active' : ''}`}
              >
                👑 Admin Master
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="app-content">
        {children}
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Pedi Fácil - Sistema Digital de Cardápio</p>
      </footer>
    </div>
  )
}
