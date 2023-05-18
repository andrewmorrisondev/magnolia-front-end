// npm modules
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

// components
import NewTree from "../../components/NewTree/NewTree"
import RecipeCard from '../../components/RecipeCard/RecipeCard'

// pages
import Loading from '../Loading/Loading'

// css
import styles from './ProfileDetails.module.css'

const ProfileDetails = ({ tree, profile, profileLoading, handleAddTree, hasTree, handleAddMember, recipes }) => {
  const [filteredRecipes, setFilteredRecipes] = useState([])

  useEffect(() => {
    setFilteredRecipes(recipes.filter(recipe => profile.familyRecipes.includes(recipe._id)))
  }, [recipes, profile])
  if (profileLoading) {
    return <Loading />
  }

  return (
    <>
      <main className={styles.container}>
        <div className={styles.sideBar}>
          <div className={styles.profileContainer}>
            <h1>{profile.name}</h1>
            {
              (hasTree == !profile.familyTree.length)
              ?
              <Link to={`/trees/${tree._id}`}>
                <h4>The {tree.name} Family</h4>
              </Link>
              :
              <NewTree 
                handleAddTree={handleAddTree}
                tree={tree}
                handleAddMember={handleAddMember}
              />
            }
            <NavLink to="/auth/change-password">Change Password</NavLink>
            <div className={styles.photoContainer}>
              <img className={styles.photo} src={profile.photo} />
            </div>
          </div>
        </div>
        <div className={styles.recipeContainer}>
          <h1>My Recipes</h1>
          <div className={styles.recipeCardContainer}>
            {(filteredRecipes.length)
              ?
              filteredRecipes.map(recipe => (
                <RecipeCard key={recipe._id} recipe={recipe} />))
              :
              <div className={styles.loadingContainer}>
                <img className={styles.loadingImage} src="/src/assets/icons/noun-waiting-1057935.png" />
                <h3>No Recipes Yet</h3>
              </div>
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default ProfileDetails