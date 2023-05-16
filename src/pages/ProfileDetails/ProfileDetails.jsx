// npm modules
import { Link } from 'react-router-dom'

// components
import NewTree from "../../components/NewTree/NewTree"

const ProfileDetails = ({ user, tree, profile, profileLoading, handleAddTree }) => {
  if (profileLoading) {
    return <h1>Loading profile...</h1>
  }

  return (
    <>
    {
    !profile.familyTree.length
    ?
      <NewTree 
        handleAddTree={handleAddTree}
      />
    :
      <Link to={`/trees/${tree._id}`}>MyTree</Link>
    }
    </>
  )
}

export default ProfileDetails