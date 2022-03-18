import Image from "next/image";
import productStyles from "../../../styles/product.module.css";
import { data } from "../../../data";
import { AiFillLike } from "react-icons/ai";
import { IoLogoFacebook, IoLogoWhatsapp, IoMdStar } from "react-icons/io";
import {
  BsEnvelope,
  BsEnvelopeFill,
  BsFacebook,
  BsHeartHalf,
  BsPhone,
  BsPhoneFill,
  BsTelegram,
  BsWhatsapp,
} from "react-icons/bs";
const index = () => {
  const product = data[4];
  return (
    <div className={productStyles.productContainer}>
      <div className={productStyles.productImage}>
        <Image src={product.url} alt={product.title} />
      </div>

      <div className={productStyles.titleAndPrice}>
        <p className={productStyles.title}>{product.title}</p>
        <p className={productStyles.price}>
          <span>$</span>
          {product.price}
        </p>
      </div>
      <div className={productStyles.starAndCounter}>
        <div className={productStyles.star}>
          <IoMdStar className={productStyles.starIcon} />
          <span>4.5</span>
        </div>
        <div className={productStyles.counter}>
          <span>+</span>
          <span className={productStyles.quantity}>1</span>
          <span>-</span>
        </div>
      </div>
      <div className={productStyles.description}>
        <h3>Details: </h3>
        <p>
          this is the beautiful products in the world i want to show you our
          products and ptions if you love our products give us the 5 star its
          importatnt to us and show us you love us very much...
        </p>
      </div>
      <div className={productStyles.addToCardContainer}>
        <div className={productStyles.contact}>
          <IoLogoWhatsapp />
          <BsFacebook />
          <BsTelegram />
          <BsPhoneFill />
          <BsEnvelopeFill />
         
          
        </div>
        <div className={productStyles.addToCard}>
          <p className={productStyles.like}>
            <BsHeartHalf className={productStyles.likeIcon} />
            {/* <AiFillLike  /> */}
          </p>
          <a className={productStyles.btn}>
            <span>Add to Card</span>
            <span className={productStyles.btnIcon}>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
