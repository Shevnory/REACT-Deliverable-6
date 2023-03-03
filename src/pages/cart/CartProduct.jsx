import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductCart, upDateProductCart } from '../../store/slices/cart.slice';

const CartProduct = ({product}) => {

    const dispatch = useDispatch();

    const handleDeleteCartProduct = () => {
        dispatch(deleteProductCart(product.id)) 
    }

    const handleClickProductCartPlus = () => {
        const newQuantity = product.quantity +1;
        const data = {
            quantity : newQuantity
        }
        dispatch(upDateProductCart(product.id, data))
    }

    const handleClickProductCartLess = () => {
        const newQuantity = product.quantity -1;
        if(newQuantity <= 0){
            dispatch(deleteProductCart(product.id)) 
        }else{
            const data = {
                quantity : newQuantity
            }
            dispatch(upDateProductCart(product.id, data))
        }
    }

    return (
        <article>
            <div>
                <img src={product.product.images[0].url} alt="" />
            </div>
            <div>
                <div><h4>{product.product.title}</h4></div>
                <div>
                    <button onClick={handleClickProductCartLess} ><i className='bx bx-minus-circle'></i></button>
                    <h5> {product.quantity} </h5>
                    <button onClick={handleClickProductCartPlus} ><i className='bx bx-plus-circle'></i></button>
                </div>
            </div>
            <div>
                <button onClick={handleDeleteCartProduct} ><i className='bx bx-trash-alt'></i></button>
            </div>
            <div>
                <h3>Total</h3>
                <h3>${product.quantity * product.product.price}</h3>
            </div>
        </article>
    )
}

export default CartProduct