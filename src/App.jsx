import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // State for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false)

  // State for cart management
  const [cartItems, setCartItems] = useState([])

  // State for category filtering
  const [categoryFilter, setCategoryFilter] = useState('all')

  const handleToggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      // Check if product is already in cart
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems // Don't add duplicates
      }
      return [...prevItems, product]
    })
  }

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value)
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggleDarkMode} />

      <label>Filter by Category: </label>
      <select value={categoryFilter} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList categoryFilter={categoryFilter} onAddToCart={handleAddToCart} />

      {cartItems.length > 0 && <Cart items={cartItems} />}
    </div>
  )
}

export default App
