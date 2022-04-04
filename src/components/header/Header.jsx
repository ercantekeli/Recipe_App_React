import React from 'react'

const Header = () => {
  return (
    <div>
        <h1>Food App</h1>
        <div>
            <input type="text" name='' placeholder='Search' />
            <button>Search</button>
            <select name="meals" id=""></select>
            <option value=""></option>
        </div>
    </div>
  )
}

export default Header