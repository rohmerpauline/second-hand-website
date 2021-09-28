import { useState } from 'react'
import Select from 'react-select'
import CategoriesItems from '../../Configs/CategoriesItems'
import searchStyle from '../../styles/SearchBox.module.css'

const SearchBox = () => {

    const [state, setState] = useState({
        category: '',
        location: '',
    
    })

    const selectCategories = CategoriesItems.map((category) => ({
        label: category.label,
        value: category.value,
        name: category.name,
    }))

    const handleSelect = (e: any): void => {
        setState(prevState => ({
            ...prevState,
            [e.name]: e.value
        }))
    }

    return (
        <div className={searchStyle.container}>

            <input type="radio" />
            <input className={searchStyle.searchBar} type='text' placeholder='Que recherche-tu ?' />           
            <div className={searchStyle.additionalSearch}>
                <Select 
                isSearchable={true}
                defaultValue={selectCategories[0]} 
                options={selectCategories} 
                /* styles={customStyles} */
                name={selectCategories[0].name}
                onChange={handleSelect}
                />
                <input className={searchStyle.searchInput} type='text' placeholder='Où recherches-tu ?' />
                <Select 
                isSearchable={true}
                defaultValue={selectCategories[0]} 
                options={selectCategories} 
                /* styles={customStyles} */
                /* name={element.name} */
                onChange={handleSelect}
                />
            </div>
            <div className={searchStyle.btnContainer}>
                <button className={searchStyle.btn}>Je recherche</button>
            </div>
            
        </div>
    )
}

export default SearchBox
