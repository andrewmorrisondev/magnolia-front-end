// npm modules
import { useState } from 'react'

const SearchForm = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
    props.handleRecipeSearch({ ...formData, [evt.target.name]: evt.target.value })
  }

  return (
    <form className="search-form">
      <input
        name="query"
        type="text"
        autoComplete="off"
        placeholder="Dad's French Toast"
        value={formData.query}
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchForm