import { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import Form from '../components/Form/Form';
import FormTitle from '../components/FormTitle/FormTitle';
import { OFFER_OBJECT, ASK_OBJECT, ASK_SERVICE, OFFER_SERVICE } from '../Configs/CreateProductFormContent';

import createAddStyle from '../styles/CreateAdd.module.css';
import { FaHandsHelping, FaHandHolding } from 'react-icons/fa';

const buttonContent = {
   btnObject: 'Objet',
   subButtonObject: ['Je donne', 'Je demande'],
   btnService: 'Service',
   subButtonService: ["J'ai besoin d'un service", 'Je propose un service'],
};

const creerannonce = () => {
   const [button, setButton] = useState('Objet');
   const [subButtons, setSubButtons] = useState([]);
   const [subButton, setSubButton] = useState('');
   const [formContentInput, setFormContentInput] = useState([]);

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
         typeOfAdd: subButton,
      }));
   }, [subButton]);

   const formTitle = {
      title: 'Je créer une annonce',
   };

   const formContent = {
      formInput: formContentInput,
      buttonText: 'Je créer mon annonce',
   };

   useEffect(() => {
      if (button === buttonContent.btnObject) {
         setSubButtons(buttonContent.subButtonObject);
         setSubButton(buttonContent.subButtonObject[0]);
      } else {
         setSubButtons(buttonContent.subButtonService);
         setSubButton(buttonContent.subButtonService[0]);
      }
   }, [button]);

   const handleProductChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { name, value } = e.target;
      setState((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const handleSelect = (e: any): void => {
      setState((prevState) => ({
         ...prevState,
         [e.name]: e.value,
      }));
   };

   const handleProductSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
   };

   useEffect(() => {
      switch (subButton) {
         case buttonContent.subButtonObject[0]:
            setFormContentInput(OFFER_OBJECT);
            break;
         case buttonContent.subButtonObject[1]:
            setFormContentInput(ASK_OBJECT);
            break;
         case buttonContent.subButtonService[0]:
            setFormContentInput(ASK_SERVICE);
            break;
         case buttonContent.subButtonService[1]:
            setFormContentInput(OFFER_SERVICE);
            break;
         default: //default
      }
   }, [subButton]);

   return (
      <>
         <button
            onClick={() => setButton(buttonContent.btnObject)}
            className={button === buttonContent.btnObject ? createAddStyle.btniconeselected : createAddStyle.btnicone}
            data-tip
            data-for='object-tip'
            data-delay-show='500'
         >
            <FaHandHolding size={20} />
         </button>
         <ReactTooltip id='object-tip' place='right' effect='float' arrowColor='black' delayShow={500}>
            Objet
         </ReactTooltip>
         <button
            onClick={() => setButton(buttonContent.btnService)}
            className={button === buttonContent.btnService ? createAddStyle.btniconeselected : createAddStyle.btnicone}
            data-tip
            data-for='service-tip'
            data-delay-show='500'
         >
            <FaHandsHelping size={20} />
         </button>
         <ReactTooltip id='service-tip' place='right' effect='float' arrowColor='black' delayShow={500}>
            Service
         </ReactTooltip>
         <FormTitle formTitle={formTitle} />
         {subButtons &&
            subButtons.map((button, index) => {
               return (
                  <button
                     key={index}
                     onClick={() => setSubButton(button)}
                     type='button'
                     className={button === subButton ? createAddStyle.btnselected : createAddStyle.btn}
                  >
                     {button}
                  </button>
               );
            })}
         <Form
            formContent={formContent}
            handleChange={handleProductChange}
            handleSelect={handleSelect}
            handleSubmit={handleProductSubmit}
         />
         {JSON.stringify(state)}
      </>
   );
};

export default creerannonce;
