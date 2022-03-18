import ProductItem from './ProductItem'
import productStyles from '../styles/productitem.module.css'
import {data} from '../data'
const Products = () => {
 
  return (
    <div className={productStyles.productsContainer}>
       {
         data.map(product =>(
           <ProductItem
              key={product.id}
              url={product.url}
              price={product.price}
              title={product.title}
           />
         ))
       }
    </div>
  )
}

export default Products