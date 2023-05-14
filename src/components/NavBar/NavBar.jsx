// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/auth/login">Log In</NavLink></li>
      <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
      <li><NavLink to="/">Landing</NavLink></li>
      <li><NavLink to="/recipes">RecipesList</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <>
      <ul classname={styles.left}>
        <li><NavLink to="/"><img src="src/assets/icons/noun-magnolia-5449337.png"></img></NavLink></li>
        <li><NavLink to="#">Family Tree Details</NavLink></li>
        <li><NavLink to="/recipes">Recipes</NavLink></li>
      </ul>
      <ul className={styles.right}>
        {user && 
          <li><NavLink to={`/profiles/${user.profile}`}>My Profile</NavLink></li>
        }
        <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
        <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
      </ul>
    </>
  )

  return (
    <nav className={styles.container}>
        {user ? protectedLinks : publicLinks}

    </nav>
  )
}

export default NavBar
