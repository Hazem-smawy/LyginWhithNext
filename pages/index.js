

import homeStyles from '../styles/home.module.css'
import NavBar from "../components/NavBar"
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Image from 'next/image'
import {data} from '../data'
const Home = () => {
  return (
    <>

    <div className={homeStyles.list}>
      {
        data.map(img=>(
          <div className={homeStyles.item} key ={img.id}>
          <Image  src={img.url} alt={img.title} />
          </div>
        ))
        
      }
    </div>

       {/* <NavBar />
      <Categories />
      <Slider />
      <Products /> */}
   
    </>
  );
};

export default Home;