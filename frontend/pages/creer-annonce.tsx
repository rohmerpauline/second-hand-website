import { useState, useEffect } from 'react';

import FormTitle from '../components/Form/FormTitle/FormTitle';
import CreateAdButton from '../components/CreateAdButton/CreateAdButton';
import MainButton from '../components/MainButton/MainButton';
import Label from '../components/Form/Label/Label';
import FormikControl from '../components/Form/FormikControl/FormikControl';

import { CATEGORIES_ITEMS, OBJECT_CONDITION_ITEMS } from '../constants';

import { Formik, Form } from 'formik';
import { FaHandsHelping, FaHandHolding } from 'react-icons/fa';

import formStyle from '../styles/Form.module.css';

const buttonContent = {
   btnObject: 'Objet',
   subButtonObject: ['Je donne', 'Je demande'],
   btnService: 'Service',
   subButtonService: ["J'ai besoin d'un service", 'Je propose un service'],
};

const radioOptionsObject = [
   { key: buttonContent.subButtonObject[0], value: '0' },
   { key: buttonContent.subButtonObject[1], value: '1' },
];

const radioOptionsService = [
   { key: buttonContent.subButtonService[0], value: '2' },
   { key: buttonContent.subButtonService[1], value: '3' },
];

const creerannonce = () => {
   const [buttonSelected, setButtonSelected] = useState('Objet');
   const [subButtons, setSubButtons] = useState([]);
   const [subButtonSelected, setSubButtonSelected] = useState('');

   const initialValues = {
      title: '',
      description: '',
      location: '',
      categories: '',
      objectcondition: '',
      typeOfAdd: '',
      image1: '',
      image2: '',
      image3: '',
   };

   useEffect(() => {
      if (buttonSelected === buttonContent.btnObject) {
         setSubButtons(buttonContent.subButtonObject);
         setSubButtonSelected(buttonContent.subButtonObject[0]);
      } else {
         setSubButtons(buttonContent.subButtonService);
         setSubButtonSelected(buttonContent.subButtonService[0]);
      }
   }, [buttonSelected]);

   const onSubmit = (values) => {
      console.log('Form data', values);
   };

   return (
      <>
         <CreateAdButton buttonSelected={buttonSelected} onClickButton={setButtonSelected} buttonContent='Objet'>
            <FaHandHolding size={20} />
         </CreateAdButton>
         <CreateAdButton buttonSelected={buttonSelected} onClickButton={setButtonSelected} buttonContent='Service'>
            <FaHandsHelping size={20} />
         </CreateAdButton>
         <FormTitle title='Je créer une annonce' />
         <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ setFieldValue }) => (
               <Form>
                  <FormikControl
                     control='radio'
                     name='typeOfAdd'
                     options={buttonSelected === buttonContent.btnObject ? radioOptionsObject : radioOptionsService}
                     onClick={setSubButtonSelected}
                     subButton={subButtonSelected}
                  />
                  <FormikControl
                     control='input'
                     type='text'
                     placeholder='plante, meuble-tv, lampe...'
                     name='title'
                     label='Titre de mon annonce :'
                  />
                  {subButtonSelected === 'Je donne' && (
                     <>
                        <Label>Ajouter des photos :</Label>
                        <div className={formStyle.uploadContainer}>
                           <FormikControl control='upload' name='image1' onChange={setFieldValue} />
                           <FormikControl control='upload' name='image2' onChange={setFieldValue} />
                           <FormikControl control='upload' name='image3' onChange={setFieldValue} />
                        </div>
                     </>
                  )}
                  <FormikControl
                     control='textarea'
                     type='text'
                     placeholder='En super bon état. À venir chercher entre 10h et 12h.'
                     name='description'
                     label='Descriptif de mon annonce :'
                     rows={8}
                  />
                  <FormikControl
                     control='input'
                     type='text'
                     placeholder='Bruxelles, Namur, Liège...'
                     name='location'
                     label='Lieu de mon annonce :'
                  />
                  {(subButtonSelected === 'Je donne' || subButtonSelected === 'Je demande') && (
                     <FormikControl
                        control='select'
                        type='text'
                        options={CATEGORIES_ITEMS}
                        name='categories'
                        label='Catégories :'
                     />
                  )}
                  {subButtonSelected === 'Je donne' && (
                     <FormikControl
                        control='select'
                        type='text'
                        options={OBJECT_CONDITION_ITEMS}
                        name='objectcondition'
                        label="État de l'objet :"
                     />
                  )}
                  <MainButton>Je m'enregistre</MainButton>
               </Form>
            )}
         </Formik>
      </>
   );
};

export default creerannonce;
