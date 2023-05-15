// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// components
import NewTree from "../../components/NewTree/NewTree"

// services
import * as treeService from '../../services/treeService'
import * as profileService from '../../services/profileService'

const ProfileDetails = (props) => {

  return (
    <>
      <NewTree 
        handleAddTree={props.handleAddTree}
      />
      <p>my tree id: </p>
    </>
  )
}

export default ProfileDetails