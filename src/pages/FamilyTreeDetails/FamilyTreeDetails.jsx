// components
import FamilyMembersList from "../../components/FamilyMemberList/FamilyMemberList"
import NewRecipe from "../../components/NewRecipe/NewRecipe"
import NewFamilyMember from "../../components/NewFamilyMember/NewFamliyMember"

const FamilyTreeDetails = ({ user, tree, handleAddRecipe, handleAddMember, handleDeleteMember}) => {

  return (  
    <main>
      {console.log(tree)}
      <h1>{user.name}'s Family Tree</h1>
      <h2>{tree.name}</h2>
      <FamilyMembersList 
        tree={tree}
        members={tree.members}
        handleDeleteMember={handleDeleteMember} />
      <NewFamilyMember handleAddMember={handleAddMember} />
      {/* <NewRecipe handleAddRecipe={handleAddRecipe} /> */}
      
    </main>
  )
}

export default FamilyTreeDetails