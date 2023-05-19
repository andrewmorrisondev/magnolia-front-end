// npm modules
import { Link } from 'react-router-dom'

// css
import styles from './Landing.module.css'

// image
import magnolia from '../../assets/icons/noun-magnolia-5449337.png'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Magnolia</h1>
      <img src={magnolia} />
      <h2>{user ? 'Welcome, ' + user.name + '!' : 'Welcome, guest!'}</h2>
      {user && <Link className={styles.profileLink} to={`/profiles/${user.profile}`}>Create Your Family Tree!</Link>}
    </main>
  )
}

export default Landing
