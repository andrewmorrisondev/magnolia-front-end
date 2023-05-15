import FamilyMemberCard from "../../components/FamilyMemberCard/FamilyMemberCard"

const FamilyTreeDetails = ({ user, tree}) => {

  return (  
    <main>
      {console.log(tree)}
      <h1>{user.name}'s Family Tree</h1>
      <h2>{tree.name}</h2>
    </main>
  )
}

export default FamilyTreeDetails