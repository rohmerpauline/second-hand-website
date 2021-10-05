import { useState } from 'react';
import Select from 'react-select';
import Button from '../Button/Button';
import { useHandleChange, useHandleSelect } from '../../hooks';
import { BsPlusCircle } from 'react-icons/bs';
import { FiMinusCircle } from 'react-icons/fi';

import CategoriesItems from '../../Configs/CategoriesItems';
import ObjectConditionItems from '../../Configs/ObjectConditionItems';
import searchStyle from '../../styles/SearchBox.module.css';

const selectCategories = CategoriesItems.map((category) => ({
   label: category.label,
   value: category.value,
   name: category.name,
}));

const objectCondition = ObjectConditionItems.map((objectCondition) => ({
   label: objectCondition.label,
   value: objectCondition.value,
   name: objectCondition.name,
}));

const SearchBox = () => {
   const [state, setState] = useState({
      search: '',
   });

   const [filter, setFilter] = useState(false);

   const filterSearch = (): void => {
      setFilter(!filter);
      if (filter) {
         setState(() => ({
            search: state.search,
         }));
      } else {
         setState((prevState) => ({
            ...prevState,
            objectcondition: objectCondition[0].value,
            categories: selectCategories[0].value,
            location: '',
            typeOfProduct: '',
            typeOfAdd: '',
         }));
      }
   };

   const handleInputChange = (e: any) => {
      useHandleChange({ e, setState });
   };

   const handleSelect = (e: any) => {
      useHandleSelect({ e, setState });
   };

   return (
      <div className={searchStyle.container}>
         <h1 className={searchStyle.title}>Recherchons ensemble !</h1>
         <input
            className={searchStyle.searchBar}
            name='search'
            type='text'
            placeholder='Que recherche-tu ?'
            onChange={handleInputChange}
         />
         {filter && (
            <>
               <div className={searchStyle.additionalSearch}>
                  <Select
                     isSearchable={true}
                     defaultValue={selectCategories[0]}
                     options={selectCategories}
                     name={selectCategories[0].name}
                     onChange={handleSelect}
                  />
                  <input
                     className={searchStyle.searchInput}
                     name='location'
                     type='text'
                     placeholder='Où recherches-tu ?'
                     onChange={handleInputChange}
                  />
                  <Select
                     isSearchable={true}
                     defaultValue={objectCondition[0]}
                     options={objectCondition}
                     name={objectCondition[0].name}
                     onChange={handleSelect}
                  />
               </div>
               {/* FIXME - no dupplication of code below */}
               <div className={searchStyle.searchBtnContainer}>
                  <div className={searchStyle.radioBtnContainer}>
                     <p className={searchStyle.radioBtnTitle}>Type d'annonce :</p>
                     <label className={searchStyle.labelContainer}>
                        <input
                           className={searchStyle.radioBtn}
                           value='objet'
                           type='radio'
                           name='typeOfProduct'
                           onChange={handleInputChange}
                        />
                        <div className={searchStyle.radioBtnLabel}>Objet</div>
                     </label>
                     <label className={searchStyle.labelContainer}>
                        <input
                           className={searchStyle.radioBtn}
                           value='service'
                           type='radio'
                           name='typeOfProduct'
                           onChange={handleInputChange}
                        />
                        <div className={searchStyle.radioBtnLabel}>Service</div>
                     </label>
                  </div>
                  <div className={searchStyle.radioBtnContainer}>
                     <p className={searchStyle.radioBtnTitle}>Type d'annonce :</p>
                     <label className={searchStyle.labelContainer}>
                        <input
                           className={searchStyle.radioBtn}
                           value='don'
                           type='radio'
                           name='typeOfAdd'
                           onChange={handleInputChange}
                        />
                        <div className={searchStyle.radioBtnLabel}>Don</div>
                     </label>
                     <label className={searchStyle.labelContainer}>
                        <input
                           className={searchStyle.radioBtn}
                           value='demande'
                           type='radio'
                           onChange={handleInputChange}
                           name='typeOfAdd'
                        />
                        <div className={searchStyle.radioBtnLabel}>Demande</div>
                     </label>
                  </div>
               </div>
            </>
         )}
         <div onClick={filterSearch} className={searchStyle.filterContainer}>
            {filter ? (
               <FiMinusCircle className={searchStyle.filterIcone} />
            ) : (
               <BsPlusCircle className={searchStyle.filterIcone} />
            )}
            <p className={searchStyle.filterText}>{filter ? 'Masquer les filtres' : 'Recherche détaillée'}</p>
         </div>
         {JSON.stringify(state)}
         <div className={searchStyle.btnContainer}>
            <Button buttonText='Je recherche' />
         </div>
      </div>
   );
};

export default SearchBox;
