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
      <label htmlFor="name-input">Add Member</label>
        <input 
          type="text"
          name="name"
          id="name-input"
          autoComplete="off"
          value={formData.name}
          placeholder="Billy Bob"
          onChange={handleChange} 
          required
        />
      <label htmlFor="relation-input">Relation</label>
      <select 
        required
        name="relation" 
        id="relation-input"
        value={formData.relation}
        onChange={handleChange}
      >
        <option value="Parent/Guardian">Parent/Guardian</option>
        <option value="Mother">Mother</option>
        <option value="Father">Father</option>
        <option value="Sibling">Sibling</option>
        <option value="Brother">Brother</option>
        <option value="Sister">Sister</option>
        <option value="Child">Child</option>
        <option value="Son">Son</option>
        <option value="Daughter">Daughter</option>
        <option value="Grandchild">Grandchild</option>
        <option value="Grandson">Grandson</option>
        <option value="Granddaughter">Granddaughter</option>
        
        {!props.members.some(
          (member) =>
            member.relation === "Significant Other" ||
            member.relation === "Husband" ||
            member.relation === "Wife"
        ) && (
          <>
            <option value="Significant Other">Significant Other</option>
            <option value="Husband">Husband</option>
            <option value="Wife">Wife</option>
          </>
        )}

        <option value="Grandparent">Grandparent</option>
      </select>
      <button type="submit">SUBMIT</button>
    </form>
  )
}

export default NewFamilyMember