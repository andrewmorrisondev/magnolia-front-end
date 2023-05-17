// npm modules
import { useState } from "react"

const NewTree = (props) => {
  const [formData, setFormData] = useState({ name: '' })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setFormData({ name: '' })
    console.log(props.tree._id)
    try {
      await props.handleAddTree(formData)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <form className="new-tree-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        id="text-input"
        value={formData.name}
        placeholder="My Family Tree"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
 
export default NewTree