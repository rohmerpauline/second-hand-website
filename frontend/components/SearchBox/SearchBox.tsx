import { useState } from 'react';
import Select from 'react-select';
import FormTitle from '../FormTitle/FormTitle';
import Button from '../Button/Button';
import CategoriesItems from '../../Configs/CategoriesItems';
import searchStyle from '../../styles/SearchBox.module.css';

const SearchBox = () => {
    const [state, setState] = useState({
        category: '',
        location: '',
        typeOfAdd: '',
    });

    const selectCategories = CategoriesItems.map((category) => ({
        label: category.label,
        value: category.value,
        name: category.name,
    }));

    const handleSelect = (e: any): void => {
        setState((prevState) => ({
            ...prevState,
            [e.name]: e.value,
        }));
    };

    return (
        <div className={searchStyle.container}>
            <h1 className={searchStyle.title}>Que les recherches sérieuses commencent !</h1>
            <div className={searchStyle.radioContainer}>
                <label className={searchStyle.labelContainer}>
                    <input type='radio' name='rad' checked />
                    <div>Service</div>
                </label>
                <label className={searchStyle.labelContainer}>
                    <input type='radio' name='rad' />
                    <div>Objet</div>
                </label>
            </div>
            <div className={searchStyle.radioContainer}>
                <label className={searchStyle.labelContainer}>
                    <input className={searchStyle.radioBtn} type='radio' name='typeOfAdd' checked />
                    <div>Don</div>
                </label>
                <label className={searchStyle.labelContainer}>
                    <input type='radio' name='typeOfAdd' />
                    <div>Demande</div>
                </label>
            </div>
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
                <Button buttonText='Je recherche' />
            </div>
        </div>
    );
};

export default SearchBox;
