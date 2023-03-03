import React, {useEffect, useState} from 'react'
import ProductCard from '../components/home/PrductCard'
import { axiosEcommerce } from '../utils/configAxios'

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axiosEcommerce
            .get("/products/")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
    }, [])
    
  return (
    <main className='home'>
        <section className='productcard_container'>
            {
                products.map((product) => (
                <ProductCard key={product.id} product={product} /> 
                ))
            }
        </section>
    </main>
  )
}

export default Home