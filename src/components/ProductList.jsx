import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ categoryFilter, onAddToCart }) => {
  // Filter products based on selected category
  const filteredProducts = categoryFilter === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === categoryFilter)

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available for the selected category.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))
      )}
    </div>
  )
}

export default ProductList
