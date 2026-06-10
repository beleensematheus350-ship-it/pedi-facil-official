import React from 'react'
import './Cardapio.css'

export default function Cardapio() {
  return (
    <div className="cardapio-container">
      <header className="cardapio-header">
        <h1>📋 Cardápio Digital</h1>
        <p>Visualize nossos produtos</p>
      </header>
      
      <main className="cardapio-content">
        <p>Seção de Cardápio (visualização pública)</p>
        <p>Aqui será exibido o menu dos restaurantes</p>
      </main>
    </div>
  )
}
