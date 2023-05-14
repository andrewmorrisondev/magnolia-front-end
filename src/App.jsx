// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import RecipesList from './pages/RecipesList/RecipesList'
import RecipeDetails from './pages/RecipeDetails/RecipeDetails'
import EditRecipe from './pages/EditRecipe/EditRecipe'
import Profiles from './pages/Profiles/Profiles'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as recipeService from './services/recipeService'
import * as profileService from './services/profileService'

// styles
import './App.css'
import FamilyTreeDetails from './pages/FamilyTreeDetails/FamilyTreeDetails'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [recipes, setRecipes] = useState([])
  const [profile, setProfile] = useState({})
  const { profileId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllRecipes = async () => {
      const data = await recipeService.index()
      setRecipes(data)
    }
    if (user) fetchAllRecipes()
  }, [user])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(profileId)
      setProfile(profileData)
    }
    fetchProfile()
    {console.log(profileId)}
  }, [profileId])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleAddRecipe = async (recipeFormData) => {
    const newRecipe = await recipeService.create(recipeFormData)
    setRecipes([newRecipe, ...recipes])
    navigate('/recipes')
  }

  const handleUpdateRecipe = async (recipeFormData) => {
    const updatedRecipe = await recipeService.update(recipeFormData)
    setRecipes(recipes.map((r) => recipeFormData._id === r._id ? updatedRecipe : r))
    navigate('/recipes')
  }

  const handleDeleteRecipe = async (recipeId) => {
    const deletedRecipe = await recipeService.delete(recipeId)
    setRecipes(recipes.filter(r => r._id !== deletedRecipe._id))
    navigate('/recipes')
  }

  return (
    <>
      <div className="nav-spacer"></div>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/recipes" 
          element={
            <RecipesList  
              recipes={recipes} 
              handleAddRecipe={handleAddRecipe}
            />}
        />
        <Route 
          path={'/recipes/:recipeId'}
          element={
            <RecipeDetails 
              user={user} 
              handleDeleteRecipe={handleDeleteRecipe}
            />
          }
        />
        <Route 
          path={'/recipes/:recipeId/edit'}
          element={
            <EditRecipe 
              user={user} 
              handleUpdateRecipe={handleUpdateRecipe}
            />
          }
        />

        <Route 
          path={'/trees/:treeId'}
          element={
            <FamilyTreeDetails user={user}/>
          }
        />

        <Route 
          path="/profiles/:profileId" 
          element={
            <ProfileDetails
              profile={profile}
            />
          }
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />

        {/* AUTH BELOW */}
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        {/* AUTH ABOVE */}
      </Routes>
    </>
  )
}

export default App