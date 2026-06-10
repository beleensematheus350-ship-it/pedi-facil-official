import React from 'react'
import './Admin.css'

export default function Admin() {
  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>🏪 Painel do Restaurante</h1>
        <p>Gerenciar seu cardápio e pedidos</p>
      </header>
      
      <main className="admin-content">
        <p>Painel administrativo do dono do restaurante</p>
        <p>Funcionalidades:</p>
        <ul>
          <li>Gerenciar produtos do cardápio</li>
          <li>Ver pedidos</li>
          <li>Configurações da loja</li>
        </ul>
      </main>
    </div>
  )
}
