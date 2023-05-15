// components
import FamilyMemberCard from "../../components/FamilyMemberCard/FamilyMemberCard"

// css
import styles from './FamilyMemberList.module.css'

const FamilyMembersList = ({tree, members}) => {
  return (
    <div className={styles.familyMemberList}>
      {members.map(member => (
        <FamilyMemberCard key={member._id} member={member} />
      ))}
    </div>
  )
}

export default FamilyMembersList