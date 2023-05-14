// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, tree, handleLogout }) => {

  const publicLinks = (
    <ul className={styles.left}>
      <li><NavLink to="/"><img src="src/assets/icons/noun-magnolia-5449337.png"></img></NavLink></li>
      <li><NavLink to="/auth/login">Log In</NavLink></li>
      <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
      <li><NavLink to="/recipes">Recipes List</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <>
      <ul className={styles.left}>
        <li><NavLink to="/"><img src="src/assets/icons/noun-magnolia-5449337.png"></img></NavLink></li>
        <li><NavLink to={`/trees/${tree._id}`}>Family Tree Details</NavLink></li>
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
