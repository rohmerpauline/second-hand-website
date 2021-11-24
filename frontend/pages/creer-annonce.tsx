import { useState, useEffect, useContext } from 'react';
import router from 'next/router';
import axios from 'axios';

import FormTitle from '../components/Form/FormTitle/FormTitle';
import CreateAdButton from '../components/CreateAdButton/CreateAdButton';
import CreateAdObjectForm from '../components/CreateAdObjectForm/CreateAdObjectForm';
import CreateAdServiceForm from '../components/CreateAdServiceForm/CreateAdServiceForm';

import { AuthContext } from '../Context/Auth/AuthContext';
/* import { useConvertToBase64 } from '../hooks'; */

import { OBJECT_BUTTON, OBJECT_SUBBUTTONS, SERVICE_SUBBUTTONS, appRoutes } from '../constants';

import { FaHandsHelping, FaHandHolding } from 'react-icons/fa';

const creerannonce = () => {
   const [buttonSelected, setButtonSelected] = useState(OBJECT_BUTTON);
   const [subButtons, setSubButtons] = useState([]);
   const [subButtonSelected, setSubButtonSelected] = useState('');
   const [isAuth] = useContext(AuthContext);
   /* const [base64File, setBase64File] = useState(null); */

   useEffect(() => {
      if (buttonSelected === OBJECT_BUTTON) {
         setSubButtons(OBJECT_SUBBUTTONS);
         setSubButtonSelected(OBJECT_SUBBUTTONS[0]);
      } else {
         setSubButtons(SERVICE_SUBBUTTONS);
         setSubButtonSelected(SERVICE_SUBBUTTONS[0]);
      }
   }, [buttonSelected]);

   const onSubmit = (values, { resetForm }) => {
      /* const base64 = await useConvertToBase64(values.image1, setBase64File); */

      const payload = {
         ...values,
         image1: values.image1.name,
         image2: values.image2.name,
         image3: values.image2.name,
         user_id: isAuth.id,
      };

      console.log(payload);

      axios({
         method: 'POST',
         url: '/ads/create',
         data: payload,
      })
         .then(function (response) {
            if (response.data === 'Ad created') {
               router.push(appRoutes.CREATE_AD);
               resetForm();
            } /* else if (response.data.error) {
               console.log(response.data.error);
            } */
         })
         .catch((error) => {
            return;
         });
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
         {buttonSelected === 'Objet' && (
            <CreateAdObjectForm
               onSubmit={onSubmit}
               subButtonSelected={subButtonSelected}
               setSubButtonSelected={setSubButtonSelected}
            />
         )}
         {buttonSelected === 'Service' && (
            <CreateAdServiceForm
               onSubmit={onSubmit}
               subButtonSelected={subButtonSelected}
               setSubButtonSelected={setSubButtonSelected}
            />
         )}
      </>
   );
};

export default creerannonce;
