// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

const EditMember = ({ tree, handleUpdateMember }) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleUpdateMember(formData, tree._id)
  }

  return (  
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Edit Member</h1>
        <input 
          type="text"
          name="name"
          id="name-input"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange} 
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditMember