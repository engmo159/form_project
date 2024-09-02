import { useEffect, useState } from 'react'
import ProductCard from '../../components/user/ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    // fetch('https://dummyjson.com/products')
    fetch(`${import.meta.env.VITE_BACKEND_URL}/product`)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [])
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-2 mt-2'>
      {products.map(
        (
          { name, description, price, discountPercentage, rating, thumbnail },
          index
        ) => (
          <ProductCard
            key={index}
            name={name}
            description={description}
            price={price}
            discountPercentage={discountPercentage}
            rating={rating}
            thumbnail={thumbnail}
          />
        )
      )}
    </div>
  )
}

export default Products
