import { useState } from 'react';
import Link from 'next/link';
import FormTitle from '../components/FormTitle/FormTitle';
import Input from '../components/Input/Input';
/* import Label from '../components/Label/Label'; */
import Button from '../components/Button/Button';
import { useHandleChange } from '../hooks';
import connexionStyle from '../styles/Connexion.module.css';
import axios from 'axios';
import router from 'next/router';

import UserSchema from '../Validators/UserSchema';

const register = () => {
   const [state, setState] = useState({
      firstname: '',
      lastname: '',
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
         url: '/api/account/register',
         data: payload,
      })
         .then(function (response) {})
         .catch((error) => {
            console.log(error.response.data);
            setError(error);
         });
   };

   return (
      <div>
         <FormTitle title={"Je m'enregistre"} subtitle='Pour créer un compte, remplissez les champs suivants :' />
         <form onSubmit={handleRegisterSubmit}>
            <Input name='firstname' placeholder='Mon prénom' onChange={handleRegisterChange} />
            <Input name='lastname' placeholder='Mon nom' onChange={handleRegisterChange} />
            <Input type='email' name='email' placeholder='Mon email' onChange={handleRegisterChange} />
            <Input type='password' name='password' placeholder='Mon mot de passe' onChange={handleRegisterChange} />
            <Input
               type='password'
               name='passwordConformation'
               placeholder='Je confirme mon mot de passe'
               onChange={handleRegisterChange}
            />
            <Button>Je m'enregistre</Button>
         </form>
         <p className={connexionStyle.message}>
            J'ai déjà un compte,
            <Link href='/login'>
               <span className={connexionStyle.registerlink}> se connecter</span>
            </Link>
            .
         </p>
         {JSON.stringify(state)}
      </div>
   );
};

export default register;
