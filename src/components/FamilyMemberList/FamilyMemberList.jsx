// components
import FamilyMemberCard from "../FamilyMemberCard/FamilyMemberCard"

// css
import styles from './FamilyMemberList.module.css'

const FamilyMembersList = ({tree, members, handleDeleteMember}) => {
  return (
    <div className={styles.familyMemberList}>
      {members.map(member => (
        <FamilyMemberCard 
          key={member._id}
          member={member}
          tree={tree}
          handleDeleteMember={handleDeleteMember} />
      ))}
    </div>
  )
}

export default FamilyMembersList