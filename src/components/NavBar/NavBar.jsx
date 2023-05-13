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
    <ul>
      <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
      <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
      <li><NavLink to="#">FamilyTreeDetails</NavLink></li>
      <li><NavLink to="/">Landing</NavLink></li>
      <li><NavLink to="/recipes">RecipesList</NavLink></li>
      {user && 
        <li><NavLink to={`/profiles/${user._id}`}>My Profile</NavLink></li>
      }
    </ul>
  )

  return (
    <nav className={styles.container}>
        {user ? protectedLinks : publicLinks}

    </nav>
  )
}

export default NavBar
