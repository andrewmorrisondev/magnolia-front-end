// npm modules
import { useState } from "react"

// css
import styles from './NewFamilyMember.module.css'

const NewFamilyMember = (props) => {
  const [formData, setFormData] = useState({ name: "" })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
		props.handleAddMember(formData)
    setFormData({ name: "" })
  }

  return (  
    <form onSubmit={handleSubmit} className={styles.newMemberForm}>
      <label htmlFor="name-input">Add Member
        <input 
          type="text"
          name="name"
          id="name-input"
          value={formData.name}
          placeholder="Billy Bob"
          onChange={handleChange} 
          required
        />
      </label>
      <button type="submit">SUBMIT</button>
    </form>
  )
}

export default NewFamilyMember