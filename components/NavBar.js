import navStyles from '../styles/navbar.module.css'
const NavBar = () => {
  return(
      <nav className={navStyles.nav}>
          <ul>
              <li className={navStyles.active}>
                  home
              </li>
              <li>
                  help
              </li>
              <li>
                  contact
              </li>
          </ul>
      </nav>
  )
};

export default NavBar;