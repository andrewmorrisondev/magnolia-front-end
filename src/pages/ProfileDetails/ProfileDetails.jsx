// npm modules
import { Link } from 'react-router-dom'

// components
import NewTree from "../../components/NewTree/NewTree"

// pages
import Loading from '../Loading/Loading'

// css
import styles from './ProfileDetails.module.css'

const ProfileDetails = ({ user, tree, profile, profileLoading, handleAddTree, hasTree, handleAddMember, recipes }) => {

  const filteredRecipes = recipes.filter(recipe =>
    profile.familyRecipes.includes(recipe._id)
  )

  if (profileLoading) {
    return <Loading />
  }

  return (
    <>
    {
      hasTree
      ?
      (
        !profile.familyTree.length
        ?
        <Link to={`/trees/${tree._id}`}>MyTree</Link>
        :
        <NewTree 
          handleAddTree={handleAddTree}
          tree={tree}
          handleAddMember={handleAddMember}
        />
      )
      :
      (
        !profile.familyTree.length
        ?
        <NewTree 
          handleAddTree={handleAddTree}
          tree={tree}
          handleAddMember={handleAddMember}
        />
        :
        <Link to={`/trees/${tree._id}`}>MyTree</Link>
      )
    }
    <h1>{profile.name}</h1>
    <h2>My recipes:</h2>
    <ul>
      {filteredRecipes.map(recipe => {
        return <li>{recipe.name}</li>
      })}
    </ul>
    </>

  )
}

export default ProfileDetails