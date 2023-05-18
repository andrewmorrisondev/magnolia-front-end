// components
import FamilyMembersList from "../../components/FamilyMemberList/FamilyMemberList"
import NewFamilyMember from "../../components/NewFamilyMember/NewFamliyMember"

// css
import styles from './FamilyTreeDetails.module.css'

const FamilyTreeDetails = ({ user, tree, setMembers, handleAddMember, handleDeleteMember}) => {

  return (  
    <main className={styles.container}>
      <div className={styles.sideBar}>
        <div className={styles.formContainer}>
          <h1>{tree.name} Family Tree</h1>
          <NewFamilyMember 
            handleAddMember={handleAddMember}
            setMembers={setMembers}
            members={tree.members}
          />
        </div>
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