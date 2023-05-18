// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, profile, tree, handleLogout, hasTree }) => {

  const publicLinks = (
    <ul className={styles.left}>
      <li>
        <NavLink className={styles.navImage} to="/">
          <img src="/src/assets/icons/noun-magnolia-5449337.png" />
        </NavLink></li>
      <ul className={styles.right}>
        <li><NavLink to="/auth/login">Log In</NavLink></li>
        <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
      </ul>
    </ul>
  )

  const protectedLinks = (
    <>
      <ul className={styles.left}>
        <li><NavLink to="/"><img src="/src/assets/icons/noun-magnolia-5449337.png"></img></NavLink></li>
        {(profile?.familyTree?.length > 0 || hasTree) && (
          <li>
            <NavLink to={`/trees/${tree._id}`}>My Family Tree</NavLink>
          </li>
        )}
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
