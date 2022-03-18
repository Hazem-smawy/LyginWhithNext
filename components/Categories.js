import catStyles from "../styles/categories.module.css";
// import { FaSun } from "react-icons/fa";
// import { FaPlay } from "react-icons/fa";
// import { FaUpload } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
const Categories = () => {
  return (
    <ul className={catStyles.cat}>
      <li>
      &rarr;
        <span>clothes</span>
      </li>
      <li>
      &rarr;
        <span>sunglasses</span>
      </li>
      <li>
      &rarr;
        {/* <FaUpload className="cat-icon" /> */}
        <span>sunglasses</span>
      </li>
      <li>
      &rarr;
        <span>sunglasses</span>
      </li>
    </ul>
  );
};

export default Categories;
