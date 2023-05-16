// npm modules
import { useEffect } from 'react'

// components
import FamilyMemberCard from "../FamilyMemberCard/FamilyMemberCard"

// css
import styles from './FamilyMemberList.module.css'

const FamilyMembersList = ({tree, members, setMembers, handleDeleteMember}) => {
  const children = members.filter(member => member.relation === 'Child')
  const siblings = members.filter(member => member.relation === 'Sibling')
  const significantOthers = members.filter(member => member.relation === 'Significant Other')

  return (
    <div className={styles.familyMemberList}>
      <div className={styles.parentsContainer}>
        {members.filter(member => member.relation === 'Parent/Guardian').map(parent => (
          <FamilyMemberCard 
            key={parent._id}
            parent={parent}
            tree={tree}
            member={parent}
            handleDeleteMember={handleDeleteMember} 
          />
        ))}
      </div>

      <FamilyMemberCard
        key={tree.creator._id}
        member={tree.creator}
        tree={tree} 
      />
      
      <div className={styles.parentsContainer}>
        {members.filter(member => member.relation === 'Child').map(child => (
          <FamilyMemberCard 
            key={child._id}
            child={child}
            tree={tree}
            member={child}
            handleDeleteMember={handleDeleteMember} 
          />
        ))}
      </div>
    </div>
  )
}

export default FamilyMembersList