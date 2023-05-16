// npm modules
import { useState } from "react"

// css
import styles from './NewFamilyMember.module.css'

const NewFamilyMember = (props) => {
  const [formData, setFormData] = useState({ 
    name: "" ,
    relation: "Parent/Guardian",
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
		props.handleAddMember(formData)
    props.setMembers(props.members)
    setFormData({ name: "", relation: "Parent/Guardian" })
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
      <label htmlFor="relation-input">Relation</label>
      <select 
        required
        name="relation" 
        id="relation-input"
        value={formData.relation}
        onChange={handleChange}
      >
        <option value="Parent/Guardian">Parent/Guardian</option>
        <option value="Sibling">Sibling</option>
        <option value="Child">Child</option>
        <option value="Significant Other">Significant Other</option>
        <option value="Grandparent">Grandparent</option>
      </select>
      <button type="submit">SUBMIT</button>
    </form>
  )
}

export default NewFamilyMember