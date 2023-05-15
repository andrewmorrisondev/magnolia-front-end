// css
import styles from './FamilyMemberCard.module.css'

const FamilyMemberCard = ({ member }) => {
  return (  
    <>
      <div className={styles.familyMemberCard}>
        <p>{member.name}</p>
      </div>
    </>
  )
}

export default FamilyMemberCard