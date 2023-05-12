// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {/* <h1>Welcome to Magnolia, {user ? user.name : 'guest!'}</h1> */}
      <h1>Magnolia</h1>
      <h2>{user ? 'Welcome, ' + user.name + '!' : 'Welcome, guest!'}</h2>
    </main>
  )
}

export default Landing
