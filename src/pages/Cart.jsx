import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllCartProducts, purchaseCart } from '../store/slices/cart.slice'
import CartProduct from './cart/CartProduct'


const Cart = () => {

  const { products } = useSelector(store => store.cart)

  const dispatch = useDispatch()

  const totalPriceCart = products.reduce(
    (total, product) => total + product.quantity * product.product.price, 0
    );

  const handleCheckoutCart = () => {
    dispatch(purchaseCart())
  }
    
  useEffect(() => {
    dispatch(getAllCartProducts())
  }, [])

  return (

    <main>
      <section>
        {products.map(product =>  (
          <CartProduct 
            key={product.id} 
            product={product}/>
        ))}
      </section>
      <section>
        <div> 
          <h3>Total:</h3>
          <h4>${totalPriceCart} </h4>
        </div>
        <button onClick={handleCheckoutCart} > CHECKOUT <i className='bx bx-check-circle'></i></button>
      </section>
    </main>

  )
}

export default Cart