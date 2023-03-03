import React, { useEffect, useState } from 'react'
import PurchaseCard from '../components/Purchases/PurchaseCard';
import { axiosEcommerce, getConfig } from '../utils/configAxios'

const Purchases = () => {

  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    axiosEcommerce
      .get("/purchases", getConfig() )
      .then((res) => setPurchases(res.data))
      .catch((err) => console.log(err))
  }, []);
  
  return (
    <main>
      <section>
        <h2>My purchases</h2>
          <section>            
            {
              purchases.map((purchase) => (
                <PurchaseCard  
                  key={purchase.id} 
                  purchase={purchase} 
                />
              ))
            }
          </section>
      </section>
    </main>
  )
}

export default Purchases