// components
import FamilyMemberCard from "../FamilyMemberCard/FamilyMemberCard"

// css
import styles from './FamilyMemberList.module.css'

const FamilyMembersList = ({tree, members, handleDeleteMember}) => {
  return (
    <div className={styles.familyMemberList}>
      <FamilyMemberCard
        key={tree.creator._id}
        member={tree.creator}
        tree={tree} />
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