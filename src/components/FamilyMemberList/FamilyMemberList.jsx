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
  const parents = members.filter(member => member.relation === 'Parent/Guardian')
  const grandparents = members.filter(member => member.relation === 'Grandparent')

  const siblingsL = siblings.filter((sibling, idx) => idx % 2 === 0)
  const siblingsR = siblings.filter((sibling, idx) => idx % 2 !== 0)

  return (

    <div className={styles.familyMemberList}>

      <div className={styles.grandparentsContainer}>
        {grandparents.map(grandparent => (
          <FamilyMemberCard
            key={grandparent._id}
            grandparent={grandparent}
            tree={tree}
            member={grandparent}
            handleDeleteMember={handleDeleteMember}
          />
        ))}
      </div>

      <div className={styles.parentsContainer}>
        {parents.map(parent => (
          <FamilyMemberCard 
            key={parent._id}
            parent={parent}
            tree={tree}
            member={parent}
            handleDeleteMember={handleDeleteMember} 
          />
          ))}
      </div>

      <div className={`${styles.myGenerationContainer} ${significantOthers.length === 0 ? styles.noSo : ''}`}>
        <div className={styles.siblingsLContainer}>
          {siblingsL.map(sibling => (
            <FamilyMemberCard 
              key={sibling._id}
              sibling={sibling}
              tree={tree}
              member={sibling}
              handleDeleteMember={handleDeleteMember} 
            />
          ))}
        </div>

        <div className={styles.meContainer}>
          <FamilyMemberCard
            key={tree.creator._id}
            member={tree.creator}
            tree={tree} 
          />
        </div>

        <div className={styles.significantOthersContainer}>
          {significantOthers.map(significantOther => (
            <FamilyMemberCard
              key={significantOther._id}
              significantOther={significantOther}
              tree={tree}
              member={significantOther}
              handleDeleteMember={handleDeleteMember}
            />
          ))}
        </div>

        <div className={styles.siblingsRContainer}>
          {siblingsR.map(sibling => (
            <FamilyMemberCard 
              key={sibling._id}
              sibling={sibling}
              tree={tree}
              member={sibling}
              handleDeleteMember={handleDeleteMember} 
            />
          ))}
        </div>
      </div>

      <div className={styles.childrenContainer}>
        {children.map(child => (
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