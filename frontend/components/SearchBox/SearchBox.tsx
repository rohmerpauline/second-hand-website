import { useState } from 'react';

import MainButton from '../MainButton/MainButton';
import FormikControl from '../Form/FormikControl/FormikControl';

import { BsPlusCircle } from 'react-icons/bs';
import { FiMinusCircle } from 'react-icons/fi';
import { Formik, Form } from 'formik';

import { CATEGORIES_ITEMS, OBJECT_CONDITION_ITEMS } from '../../constants';

import searchStyle from '../../styles/SearchBox.module.css';

const SearchBox = () => {
   const initialValues = {
      search: '',
      objectcondition: '',
      categories: '',
      location: '',
      typeOfProduct: '',
      typeOfAdd: '',
   };

   const [filter, setFilter] = useState(false);

   const filterSearch = (): void => {
      setFilter(!filter);
   };

   const onSubmit = (values) => {
      console.log('Form data', values);
   };

   const radioOptionsTypeProduct = [
      { key: 'Objet', value: 'object' },
      { key: 'Service', value: 'service' },
   ];

   const radioOptionsTypeAd = [
      { key: 'Don', value: 'don' },
      { key: 'Demande', value: 'demande' },
   ];

   return (
      <div className={searchStyle.container}>
         <h1 className={searchStyle.title}>Recherchons ensemble !</h1>
         <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(formik) => {
               return (
                  <Form>
                     <FormikControl control='input' type='text' placeholder='Que recherches-tu ?' name='search' />
                     {filter && (
                        <>
                           <div className={searchStyle.additionalSearch}>
                              <FormikControl
                                 control='select'
                                 type='text'
                                 options={CATEGORIES_ITEMS}
                                 name='categories'
                              />
                              <FormikControl
                                 control='input'
                                 type='text'
                                 placeholder='Où recherches-tu ?'
                                 name='location'
                              />
                              <FormikControl
                                 control='select'
                                 type='text'
                                 options={OBJECT_CONDITION_ITEMS}
                                 name='objectcondition'
                              />
                           </div>
                           <div className={searchStyle.radioBtnContainer}>
                              <FormikControl
                                 control='radio'
                                 name='typeOfProduct'
                                 options={radioOptionsTypeProduct}
                                 label='Type de produit :'
                              />
                           </div>
                           <div className={searchStyle.radioBtnContainer}>
                              <FormikControl
                                 control='radio'
                                 name='typeOfAdd'
                                 options={radioOptionsTypeAd}
                                 label="Type d'annonce :"
                              />
                           </div>
                        </>
                     )}
                     <div onClick={filterSearch} className={searchStyle.filterContainer}>
                        {filter ? (
                           <FiMinusCircle className={searchStyle.filterIcone} />
                        ) : (
                           <BsPlusCircle className={searchStyle.filterIcone} />
                        )}
                        <p className={searchStyle.filterText}>
                           {filter ? 'Masquer les filtres' : 'Recherche détaillée'}
                        </p>
                     </div>
                     <div className={searchStyle.btnContainer}>
                        <MainButton>Je recherche</MainButton>
                     </div>
                  </Form>
               );
            }}
         </Formik>
      </div>
   );
};

export default SearchBox;
