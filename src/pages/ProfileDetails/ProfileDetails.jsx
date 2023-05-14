// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// components
import NewTree from "../../components/NewTree/NewTree"

// services
import * as treeService from '../../services/treeService'
import * as profileService from '../../services/profileService'

const ProfileDetails = (props) => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState(null)

  const handleAddTree = async (treeFormData) => {
    const newTree = await treeService.create(treeFormData)
    setProfile({ ...profile, trees: [profile.familyTree, newTree] })
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(profileId)
      setProfile(profileData)
    }
    fetchProfile()
  }, [profileId, profile])

  return (
    <>
      <NewTree 
        handleAddTree={handleAddTree}
      />
      <p>my tree id: </p>
    </>
  )
}

export default ProfileDetails