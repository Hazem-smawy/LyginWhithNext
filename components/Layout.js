import layoutStyles from "../styles/layout.module.css";
import Header from "./Header";


const Layout = ({children}) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
