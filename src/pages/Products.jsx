import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 0,
      title: '',
      description: '',
      price: 0,
      discountPercentage: 0,
      rating: 0,
      thumbnail: '',
    },
  ])
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-2 mt-2'>
      {products.map(
        ({
          id,
          title,
          description,
          price,
          discountPercentage,
          rating,
          thumbnail,
        }) => (
          <ProductCard
            key={id}
            title={title}
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
