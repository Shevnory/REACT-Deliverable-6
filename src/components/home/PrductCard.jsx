import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductCart } from '../../store/slices/cart.slice';

const ProductCard = ({product }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickProduct = () => {
    navigate(`/products/${product.id}`)
  };

  const handleClickAddProduct = (e) => {
    e.stopPropagation();
    const data ={
      quantity: 1,
      productId: product.id
    }
    dispatch(addProductCart(data))
    console.log("Add Product");
  };
  
  return (
    <article onClick={handleClickProduct} className='productcard' >
      <header className='productcard_header' >
        <div className='productcard_images_container' >
          <img className='productcard_image' src={product?.images[0].url} alt="" />
        </div>
      </header>
      <section className='productcard_info' >
        <div className="productcad_info_title">
          <h5> {product?.brand} </h5>
          <h4> {product?.title} </h4>
        </div>
        <div className="productcard_info_price">
          <h5>Price</h5>
          <h4>$ {product?.price}</h4>
        </div>
        <button onClick={handleClickAddProduct} className='productcard_add_product' ><i className='bx bx-cart'></i></button>
      </section>
    </article>
  )
}

export default ProductCard