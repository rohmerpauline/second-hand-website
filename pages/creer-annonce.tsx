import { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import Form from '../components/Form/Form';
import FormTitle from '../components/FormTitle/FormTitle';
import AdButton from '../components/AdButton/AdButton';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import SelectInput from '../components/SelectInput/SelectInput';
import CategoriesItems from '../Configs/CategoriesItems';
import ObjectConditionItems from '../Configs/ObjectConditionItems';
import { useHandleChange, useHandleSelect } from '../hooks';
/* import { OFFER_OBJECT, ASK_OBJECT, ASK_SERVICE, OFFER_SERVICE } from '../Configs/CreateProductFormContent'; */

import { FaHandsHelping, FaHandHolding } from 'react-icons/fa';

const buttonContent = {
   btnObject: 'Objet',
   subButtonObject: ['Je donne', 'Je demande'],
   btnService: 'Service',
   subButtonService: ["J'ai besoin d'un service", 'Je propose un service'],
};

const creerannonce = () => {
   const [buttonSelected, setButtonSelected] = useState('Objet');
   const [subButtons, setSubButtons] = useState([]);
   const [subButtonSelected, setSubButtonSelected] = useState('');

   const [state, setState] = useState({
      title: '',
      description: '',
      location: '',
      categories: '',
      objectcondition: '',
      typeOfAdd: '',
   });

   useEffect(() => {
      setState((prevState) => ({
         ...prevState,
         typeOfAdd: subButtonSelected,
      }));
   }, [subButtonSelected]);

   useEffect(() => {
      if (buttonSelected === buttonContent.btnObject) {
         setSubButtons(buttonContent.subButtonObject);
         setSubButtonSelected(buttonContent.subButtonObject[0]);
      } else {
         setSubButtons(buttonContent.subButtonService);
         setSubButtonSelected(buttonContent.subButtonService[0]);
      }
   }, [buttonSelected]);

   const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      useHandleChange({ e, setState });
   };

   const handleSelect = (e: any): void => {
      useHandleSelect({ e, setState });
   };

   const handleProductSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
   };

   const selectCategory = CategoriesItems.map((category) => ({
      value: category.value,
      label: category.label,
      name: category.name,
   }));

   const selectObjectCondition = ObjectConditionItems.map((objectcondition) => ({
      value: objectcondition.value,
      label: objectcondition.label,
      name: objectcondition.name,
   }));

   return (
      <>
         <AdButton
            buttonSelected={buttonSelected}
            onClickButton={setButtonSelected}
            buttonContent={'Objet'}
            tooltip={true}
         >
            <FaHandHolding size={20} />
         </AdButton>
         <AdButton
            buttonSelected={buttonSelected}
            onClickButton={setButtonSelected}
            buttonContent={'Service'}
            tooltip={true}
         >
            <FaHandsHelping size={20} />
         </AdButton>
         <FormTitle title='Je créer une annonce' />
         <AdButton
            buttonSelected={subButtonSelected}
            onClickButton={setSubButtonSelected}
            buttonContent={subButtons[0]}
         >
            {subButtons[0]}
         </AdButton>
         <AdButton
            buttonSelected={subButtonSelected}
            onClickButton={setSubButtonSelected}
            buttonContent={subButtons[1]}
         >
            {subButtons[1]}
         </AdButton>
         <form onSubmit={handleProductSubmit}>
            <Input
               name='title'
               placeholder='plante, meuble-tv, lampe...'
               label='Titre de mon annonce :'
               onChange={handleProductChange}
            />
            <Input
               name='description'
               type='textarea'
               placeholder='En super bon état. À venir chercher entre 10h et 12h.'
               label='Descriptif de mon annonce :'
               onChange={handleProductChange}
            />
            <Input
               name='location'
               placeholder='Bruxelles, Namur, Liège...'
               label='Lieu de mon annonce :'
               onChange={handleProductChange}
            />
            {(subButtonSelected === 'Je donne' || subButtonSelected === 'Je demande') && (
               <SelectInput name='categories' options={selectCategory} onChange={handleSelect} label='Catégories' />
            )}
            {subButtonSelected === 'Je donne' && (
               <SelectInput
                  name='objectcondition'
                  options={selectObjectCondition}
                  onChange={handleSelect}
                  label='Catégories'
               />
            )}
            <Button>Je créer mon annonce</Button>
            {/* {JSON.stringify(state)} */}
         </form>
      </>
   );
};

export default creerannonce;
