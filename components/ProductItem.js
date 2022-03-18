import productStyles from "../styles/productitem.module.css";
import {useState} from 'react'
import Image from "next/image";
import { BsHeartFill, BsWhatsapp } from "react-icons/bs";
import { IoIosAdd, IoMdHeartEmpty } from "react-icons/io";
const ProductItem = ({ url, title, price }) => {
  const [love,setLove] = useState(true);
  
  let handleColors=()=>{
    let bckClrs = ["#f6d2fb","#d6d2fb","##d1cdf9","#f3e9ca"];
    let random =Math.floor(Math.random()* bckClrs.length);
    let backColor =bckClrs[random];
    return backColor;
  }
 
  let prBckStyle= {
    backgroundColor:handleColors(),
  }
  return (
    <div style={prBckStyle} className={productStyles.productItem}>
      <div className={productStyles.add}>
        <IoIosAdd className={productStyles.addIcon} />
      </div>
      <div className={productStyles.productItemContainer}>
        <div className={productStyles.productItemtImg}>
          <Image src={url} alt={title} className={productStyles.image} />
        </div>
        <div className={productStyles.productItemDetails}>
          <h4>{title}</h4>
          <p>${price}</p>
          <div className={productStyles.media}>
            {
              love ?<span onClick={()=>setLove(false)}> <IoMdHeartEmpty className={productStyles.loveIcon} /></span>:
                  <span onClick={()=>setLove(true)}><BsHeartFill className={productStyles.loveIcon} /></span>
            }
            <span>
              <BsWhatsapp className={productStyles.whatIcon} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
