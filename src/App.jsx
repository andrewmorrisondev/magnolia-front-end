// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

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
import FamilyTreeDetails from './pages/FamilyTreeDetails/FamilyTreeDetails'
import EditMember from './pages/EditMember/EditMember'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as recipeService from './services/recipeService'
import * as profileService from './services/profileService'
import * as treeService from './services/treeService'

// styles
import './App.css'
// import FamilyTreeDetails from './pages/FamilyTreeDetails/FamilyTreeDetails'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [recipes, setRecipes] = useState([])
  const [profile, setProfile] = useState({})
  const [tree, setTree] = useState([])
  const [members, setMembers] = useState([])
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
      const profileData = await profileService.getProfile(user.profile)
      setProfile(profileData)
    }
    if (user) {
      fetchProfile()
    }
    {console.log(profile)}
  }, [user])

  useEffect(() => {
    const fetchTree = async () => {
      const treeData = await treeService.show(profile.familyTree[0]._id)
      setTree(treeData)
      setMembers(treeData.members)
    }
    if (profile.familyTree && profile.familyTree.length > 0) {
      fetchTree()
    }
  }, [profile])

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

  const handleAddMember = async (memberFormData) => {
    const newMember = await treeService.createMember(memberFormData, tree._id)
    const updatedTree = await treeService.show(tree._id)
    setTree(updatedTree)
    setMembers([...members, newMember])
  }

  const handleDeleteMember = async (memberId, treeId) => {
    await treeService.deleteMember(memberId, treeId)
    const updatedTree = await treeService.show(treeId)
    setTree(updatedTree)
  }

  const handleUpdateMember = async (memberFormData, treeId) => {
    const updatedMember = await treeService.updateMember(memberFormData, treeId)
    setMembers(members.map((m) => memberFormData._id === m._id ? updatedMember : m))
    const updatedTree = await treeService.show(tree._id)
    setTree(updatedTree)
    setMembers([...members, updatedMember])
    navigate(`/trees/${tree._id}`)
  }

  const handleAddTree = async (treeFormData) => {
    const newTree = await treeService.create(treeFormData)
    setTree(newTree)
    setProfile({ ...profile, trees: [profile.familyTree, newTree] })
    navigate(`/trees/${tree._id}`)
  }

  return (
    <>
      <div className="nav-spacer"></div>
      <NavBar user={user} tree={tree} handleLogout={handleLogout} />
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
          path={`/trees/${tree._id ?? ':treeId'}`}
          element={
            <ProtectedRoute user={user}>
                {tree._id && (
                <FamilyTreeDetails 
                  user={user}
                  tree={tree}
                  handleAddMember={handleAddMember}
                  handleDeleteMember={handleDeleteMember}
                  handleAddRecipe={handleAddRecipe}
                />
            )}
              </ProtectedRoute>
          }
        />

        <Route
          path={`/trees/:treeId/members/:memberId/edit`}
          element={
            <ProtectedRoute user={user}>
              <EditMember 
                tree={tree}
                handleUpdateMember={handleUpdateMember}
              />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/profiles/:profileId" 
          element={
            <ProtectedRoute user={user}>
              <ProfileDetails
                profile={profile}
                handleAddTree={handleAddTree}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles user={user}/>
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