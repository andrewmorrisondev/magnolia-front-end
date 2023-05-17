// components
import FamilyMembersList from "../../components/FamilyMemberList/FamilyMemberList"
import NewRecipe from "../../components/NewRecipe/NewRecipe"
import NewFamilyMember from "../../components/NewFamilyMember/NewFamliyMember"

// css
import styles from './FamilyTreeDetails.module.css'

const FamilyTreeDetails = ({ user, tree, handleAddRecipe, setMembers, handleAddMember, handleDeleteMember}) => {

  return (  
    <main className={styles.container}>
      {console.log(tree)}
      <div className={styles.formContainer}>
        <h1>{user.name}'s Family Tree</h1>
        <h2>{tree.name}</h2>
        <NewFamilyMember 
          handleAddMember={handleAddMember}
          setMembers={setMembers}
          members={tree.members}
        />
      </div>
      <div className={styles.familyMembersContainer}>
        <FamilyMembersList 
          tree={tree}
          members={tree.members}
          handleDeleteMember={handleDeleteMember} />
      </div>
      {/* <NewRecipe handleAddRecipe={handleAddRecipe} /> */}
    </main>
  )
}

export default FamilyTreeDetails