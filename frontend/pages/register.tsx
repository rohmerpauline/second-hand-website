import { useState } from 'react';
import Link from 'next/link';
import Form from '../components/Form/Form';
import FormTitle from '../components/FormTitle/FormTitle';
import { useHandleChange } from '../hooks';
import connexionStyle from '../styles/Connexion.module.css';
import axios from 'axios';

const formTitle = {
   title: "Je m'enregistre",
   subtitle: 'Pour créer un compte, remplissez les champs suivants :',
};

const formContent = {
   formInput: [
      {
         id: 1,
         type: 'text',
         name: 'lastname',
         placeholder: 'Mon nom',
      },
      {
         id: 2,
         type: 'text',
         name: 'firstname',
         placeholder: 'Mon prénom',
      },
      {
         id: 3,
         type: 'email',
         name: 'email',
         placeholder: 'Mon adresse e-mail',
      },
      {
         id: 4,
         type: 'password',
         name: 'password',
         placeholder: 'Mon mot de passe',
      },
      {
         id: 5,
         type: 'password',
         name: 'password_confirmation',
         placeholder: 'Je confirme mon mot de passe',
      },
   ],
   buttonText: "Je m'enregistre",
};

const register = () => {
   const [state, setState] = useState({
      lastname: '',
      firstname: '',
      email: '',
      password: '',
      password_confirmation: '',
   });

   const [error, setError] = useState('');

   const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      useHandleChange({ e, setState });
   };

   const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      const payload = {
         lastname: state.lastname,
         firstname: state.firstname,
         email: state.email,
         password: state.password,
         passwordConfirmation: state.password_confirmation,
      };

      axios({
         method: 'post',
         url: '/api/register',
         data: payload,
      })
         .then(function (response) {
            console.log(response.data);
         })
         .catch((error) => {
            console.log(error);
            setError(error);
         });
   };

   return (
      <>
         <FormTitle formTitle={formTitle} />
         <Form
            formContent={formContent}
            handleChange={handleRegisterChange}
            handleSubmit={(e) => handleRegisterSubmit(e)}
         />
         <p className={connexionStyle.message}>
            J'ai déjà un compte,{' '}
            <Link href='/login'>
               <span className={connexionStyle.registerlink}>se connecter</span>
            </Link>
            .
         </p>
         {/* {JSON.stringify(state)} */}
      </>
   );
};

export default register;
