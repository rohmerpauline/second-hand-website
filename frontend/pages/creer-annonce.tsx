import { useState, useEffect, useContext } from 'react';
import router from 'next/router';
import axios from 'axios';

import FormTitle from '../components/Form/FormTitle/FormTitle';
import CreateAdButton from '../components/CreateAdButton/CreateAdButton';
import CreateAdObjectForm from '../components/CreateAdObjectForm/CreateAdObjectForm';
import CreateAdServiceForm from '../components/CreateAdServiceForm/CreateAdServiceForm';

import { AuthContext } from '../Context/Auth/AuthContext';

import { OBJECT_BUTTON, OBJECT_SUBBUTTONS, SERVICE_SUBBUTTONS, appRoutes } from '../constants';

import { FaHandsHelping, FaHandHolding } from 'react-icons/fa';

const creerannonce = () => {
   const [buttonSelected, setButtonSelected] = useState(OBJECT_BUTTON);
   const [subButtons, setSubButtons] = useState([]);
   const [subButtonSelected, setSubButtonSelected] = useState('');
   const [isAuth] = useContext(AuthContext);

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
      const payload = {
         ...values,
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
