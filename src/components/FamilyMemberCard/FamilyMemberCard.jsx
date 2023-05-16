// npm modules
import { Link } from "react-router-dom"

// css
import styles from './FamilyMemberCard.module.css'

const FamilyMemberCard = ({ member, tree, handleDeleteMember }) => {
  return (  
    <>
      <div className={styles.familyMemberCard}>
        <p>{member.name}</p>
        <p>{member.relation}</p>
        <Link to={`/trees/${tree._id}/members/${member._id}/edit`} state={member}>Edit</Link>
        <button onClick={() => handleDeleteMember(member._id, tree._id)}>X</button>
      </div>
    </>
  )
}

export default FamilyMemberCard