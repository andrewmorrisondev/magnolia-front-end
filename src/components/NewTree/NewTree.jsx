// npm modules
import { useState } from "react"

const NewTree = (props) => {
  const [formData, setFormData] = useState({ name: '' })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddTree(formData)
    setFormData({ name: "" })
  }


  return (
    <form className="new-tree-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        id="text-input"
        value={formData.text}
        placeholder="My Family Tree"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
 
export default NewTree