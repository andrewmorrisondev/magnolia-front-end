// components
import FamilyMemberCard from "../../components/FamilyMemberCard/FamilyMemberCard"

const FamilyMembersList = (props) => {
  return (
    <main>
      {props.members.map(member => (
        <FamilyMemberCard key={member._id} member={member} />
      ))}
    </main>
  )
}

export default FamilyMembersList