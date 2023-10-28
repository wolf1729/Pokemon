/* eslint-disable react/prop-types */
import '../styles/inputTab.css'

function InputTab({value, handleChange}) {

    return(
        <>
        <input placeholder='Search' type='text' className="searchBar" maxLength='50' onChange={handleChange} value={value}/>
        </>
    )
}

export default InputTab;