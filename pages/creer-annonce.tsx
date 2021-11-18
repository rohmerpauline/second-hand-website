import { useState, useEffect } from 'react';

import FormTitle from '../components/Form/FormTitle/FormTitle';
import CreateAdButton from '../components/CreateAdButton/CreateAdButton';
import MainButton from '../components/MainButton/MainButton';
import FormikControl from '../components/Form/FormikControl/FormikControl';

import CategoriesItems from '../Configs/CategoriesItems';
import ObjectConditionItems from '../Configs/ObjectConditionItems';

import { Formik, Form } from 'formik';
import { FaHandsHelping, FaHandHolding } from 'react-icons/fa';

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
            {(formik) => {
               return (
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
                           options={CategoriesItems}
                           name='categories'
                           label='Catégories :'
                        />
                     )}
                     {subButtonSelected === 'Je donne' && (
                        <FormikControl
                           control='select'
                           type='text'
                           options={ObjectConditionItems}
                           name='objectcondition'
                           label="État de l'objet :"
                        />
                     )}
                     <MainButton type='submit' style='main'>
                        Je m'enregistre
                     </MainButton>
                  </Form>
               );
            }}
         </Formik>
      </>
   );
};

export default creerannonce;
