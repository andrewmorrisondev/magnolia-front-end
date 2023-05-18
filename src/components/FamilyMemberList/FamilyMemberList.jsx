// npm modules
import { useState, useEffect } from 'react'

// components
import FamilyMemberCard from "../FamilyMemberCard/FamilyMemberCard"

// css
import styles from './FamilyMemberList.module.css'

const FamilyMembersList = ({tree, members, handleDeleteMember}) => {
  const children = members.filter(member => member.relation === 'Child' || member.relation === 'Son' || member.relation === 'Daughter')
  const siblings = members.filter(member => member.relation === 'Sibling' || member.relation === 'Brother' || member.relation === 'Sister')
  const significantOthers = members.filter(member => member.relation === 'Significant Other' || member.relation === 'Husband' || member.relation === 'Wife')
  const parents = members.filter(member => member.relation === 'Parent/Guardian' || member.relation === 'Mother' || member.relation === 'Father')
  const grandparents = members.filter(member => member.relation === 'Grandparent')
  const grandchildren = members.filter(member => member.relation === 'Grandchild' || member.relation === 'Grandson' || member.relation === 'Granddaughter')

  const siblingsL = siblings.filter((sibling, idx) => idx % 2 === 0)
  const siblingsR = siblings.filter((sibling, idx) => idx % 2 !== 0)

  const [hoveredMemberId, setHoveredMemberId] = useState(null)

  const handleHover = (memberId, isHovered) => {
    if (isHovered) {
      setHoveredMemberId(memberId)
    } else {
      setHoveredMemberId(null)
    }
  }
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
            hoveredMemberId={hoveredMemberId}
            onMouseEnter={() => handleHover(grandparent._id, true)}
            onMouseLeave={() => handleHover(grandparent._id, false)}
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
            hoveredMemberId={hoveredMemberId}
            onMouseEnter={() => handleHover(parent._id, true)}
            onMouseLeave={() => handleHover(parent._id, false)}
          />
          ))}
      </div>

      <div className={styles.myGenerationContainer}>
        <div className={styles.siblingsLContainer}>
          {siblingsL.map(sibling => (
            <FamilyMemberCard 
              key={sibling._id}
              sibling={sibling}
              tree={tree}
              member={sibling}
              handleDeleteMember={handleDeleteMember}
              hoveredMemberId={hoveredMemberId}
              onMouseEnter={() => handleHover(sibling._id, true)}
              onMouseLeave={() => handleHover(sibling._id, false)}
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

        <div className={`${styles.significantOthersContainer} ${significantOthers.length === 0 ? '' : styles.noSo}`}>
          {significantOthers.map(significantOther => (
            <FamilyMemberCard
              key={significantOther._id}
              significantOther={significantOther}
              tree={tree}
              member={significantOther}
              handleDeleteMember={handleDeleteMember}
              hoveredMemberId={hoveredMemberId}
              onMouseEnter={() => handleHover(significantOther._id, true)}
              onMouseLeave={() => handleHover(significantOther._id, false)}
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
              hoveredMemberId={hoveredMemberId}
              onMouseEnter={() => handleHover(sibling._id, true)}
              onMouseLeave={() => handleHover(sibling._id, false)}
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
            hoveredMemberId={hoveredMemberId}
            onMouseEnter={() => handleHover(child._id, true)}
            onMouseLeave={() => handleHover(child._id, false)}
          />
        ))}
      </div>
      <div className={styles.grandchildrenContainer}>
        {grandchildren.map(grandchild => (
          <FamilyMemberCard
            key={grandchild._id}
            grandchild={grandchild}
            tree={tree}
            member={grandchild}
            handleDeleteMember={handleDeleteMember}
            hoveredMemberId={hoveredMemberId}
            onMouseEnter={() => handleHover(grandchild._id, true)}
            onMouseLeave={() => handleHover(grandchild._id, false)}
          />
        ))}
      </div>
    </div>
  )
}

export default FamilyMembersList