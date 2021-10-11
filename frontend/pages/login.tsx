import { useState } from 'react';
import Link from 'next/link';
import Form from '../components/Form/Form';
import FormTitle from '../components/FormTitle/FormTitle';
import { useHandleChange } from '../hooks';
import connexionStyle from '../styles/Connexion.module.css';

const login = () => {
   const formTitle = {
      title: 'Je me connecte',
   };

   const formContent = {
      formInput: [
         {
            id: 1,
            type: 'text',
            name: 'email',
            placeholder: 'Mon adresse email',
         },
         {
            id: 2,
            type: 'password',
            name: 'password',
            placeholder: 'Mon mot de passe',
         },
         {
            id: 3,
            type: 'checkbox',
            name: 'rememberMeToken',
            label: 'Remember me',
         },
      ],
      buttonText: 'Je me connecte',
   };

   const [state, setState] = useState({
      email: '',
      password: '',
   });

   const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      useHandleChange({ e, setState });
   };

   const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
   };

   return (
      <>
         <FormTitle formTitle={formTitle} />
         <Form formContent={formContent} handleChange={handleLoginChange} handleSubmit={handleLoginSubmit} />
         <p className={connexionStyle.message}>
            Je n'ai pas de compte,{' '}
            <Link href='/register'>
               <span className={connexionStyle.registerlink}>créer un compte</span>
            </Link>
            .
         </p>
         {/* {JSON.stringify(state)} */}
      </>
   );
};

export default login;
