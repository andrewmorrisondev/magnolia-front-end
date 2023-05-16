// components
import FamilyMemberCard from "../FamilyMemberCard/FamilyMemberCard"

// css
import styles from './FamilyMemberList.module.css'

const FamilyMembersList = ({tree, members, handleDeleteMember}) => {
  const parents = members.filter(member => member.relation === 'Parent/Guartian')
  const children = members.filter(member => member.relation === 'Child')
  const siblings = members.filter(member => member.relation === 'Sibling')
  const significantOthers = members.filter(member => member.relation === 'Significant Other')
  const grandparents = members.filter(member => member.relation === 'Grandparent')

  return (
    <div className={styles.familyMemberList}>
      <div className={styles.parentsContainer}>
        {parents.map(parent => (
          <FamilyMemberCard 
            key={parent._id}
            parent={parent}
            tree={tree}
            handleDeleteMember={handleDeleteMember} 
          />
        ))}
      </div>

      <FamilyMemberCard
        key={tree.creator._id}
        member={tree.creator}
        tree={tree} 
      />
      
      <div className={styles.childrenContainer}>
        {children.map(child => (
          <FamilyMemberCard
            key={child._id}
            child={child}
            tree={tree}
            handleDeleteMember={handleDeleteMember} 
          />
        ))}
      </div>
    </div>
  )
}

export default FamilyMembersList