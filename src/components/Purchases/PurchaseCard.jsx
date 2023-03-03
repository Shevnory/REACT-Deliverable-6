import React from 'react'
import { dateFormat } from '../../utils/date'

const PurchaseCard = ({purchase}) => {

 

  return (
    <article>
        <section>
            <img src={purchase?.product.images[0].url} alt="" />
            <h4> {purchase?.product.title} </h4>
        </section>
        <section>
            <h5>{dateFormat(purchase?.createdAt)}</h5>
            <div> {purchase?.quantity} </div>
            <h3> {purchase?.product.price} </h3>
        </section>
    </article>
  )
}

export default PurchaseCard