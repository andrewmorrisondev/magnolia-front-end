// npm modules
import { useState, useEffect } from 'react'

// components
import NewTree from "../../components/NewTree/NewTree"

// services
import * as treeService from '../../services/treeService'
import * as profileService from '../../services/profileService'

const ProfileDetails = (props) => {
  const [profile, setProfile] = useState(props.user.profile)

  const handleAddTree = async (treeFormData) => {
    const newTree = await treeService.create(treeFormData)
    setProfile({ ...profile, trees: [profile.familyTree, newTree],})
  }

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const profileData = await profileService.getProfile(profile)
  //     setProfile(profileData)
  //   }
  //   fetchProfile()
  // }, [profile])

  return (
    <>
      <NewTree 
        handleAddTree={handleAddTree}
      />
      {/* <p>{props.user.profile}</p> */}
    </>
  )
}

export default ProfileDetails