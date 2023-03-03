import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosEcommerce } from '../utils/configAxios'
import ProductCard from '../components/home/PrductCard'
import { addProductCart } from '../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const Products = () => {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [similarProducts, setSimilarProducts] = useState([]);
  const dispatch = useDispatch();
  const {id} = useParams();
  
  const handelPlus = () => setQuantity(quantity+1);

  const handleClickAddProduct = () => {
    const data ={
      quantity,
      productId: product.id
    }
    dispatch(addProductCart(data))
  };

  const handelLess = () => {
    const newQuantity = quantity -1
    if(newQuantity >= 1){
      setQuantity(newQuantity)
    }
  }

  useEffect(() => {
    axiosEcommerce
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
  },[id])

    useEffect(() => {
      if(product){
      axiosEcommerce
        .get(`/products?categoryId=${product?.categoryId}`)
        .then((res) => {
          const relatedProducts = res.data.filter(relatedProduct => relatedProduct.id !==  product.id);
          setSimilarProducts(relatedProducts)
        })
        .catch((err) => console.log(err))
      }
    }, [product])
 
    useEffect(() => {
      setQuantity(1)
    },[id])

  return (
    <main className='description_products_main'>
      <section className='descrition_products_container'>
        <section className='descrition_products_img' > 
          <img src={product?.images[0].url} alt="" />
        </section>

        <section className='descrition_products_info' > {/*==============DETAILS============= */}
          
          <div className="description_products_info_title">
            <h5> {product?.brand} </h5>
            <h4> {product?.title} </h4>
          </div>

          <div className='description_products_info_quantity' > {/*===========PRICE=====*/}
            <section className='product_price' >
              <h5>Price</h5>
              <h4>$ {product?.price} </h4>
            </section>  
            <section className='product_quantity' >
              <h5>Quantity</h5>
              <div className='product_counter_quantity'>
                <button onClick={handelLess} >-</button>
                <h4> {quantity} </h4>
                <button onClick={handelPlus} >+</button>
              </div>            
            </section> 
          </div>

          <div className='description_products_description' > {/* =======Description========= */}
            <p> {product?.description} </p>
          </div>

          <div className='description_products_btn_addtocart' >
            <button onClick={handleClickAddProduct} >Add to car <i className='bx bx-cart'></i></button>
          </div>
        </section>
      </section>

      <div className='description_product_related' >
        <h2 className='description_product_related_title' >Discover related products</h2>
        {
          similarProducts.map(product => <ProductCard key={product.id} product={product}/>)
        }
      </div>

    </main>
  )
}

export default Products