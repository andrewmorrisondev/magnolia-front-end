// npm modules
import { Link } from "react-router-dom"

// css
import styles from './FamilyMemberCard.module.css'

const FamilyMemberCard = ({ member, tree, handleDeleteMember, hoveredMemberId, onMouseEnter, onMouseLeave }) => {
  const isHovered = hoveredMemberId === member._id
  const className = isHovered ? null : styles.hidden
  return (  
    <>
      <div className={styles.familyMemberCard}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
      >
        <div className={styles.name}>{member.name}</div>
        <div className={`${styles.relation} ${className}`}>{member.relation}</div>
        <div className={`${styles.familyMemberCardOptions} ${className}`}>
        {member._id !== tree.creator._id &&
          <>
            <Link to={`/trees/${tree._id}/members/${member._id}/edit`} state={member}>Edit</Link>
            <button onClick={() => handleDeleteMember(member._id, tree._id)}>X</button>
          </>
        }
        </div>
      </div>
    </>
  )
}

export default FamilyMemberCard