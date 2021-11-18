import { useState } from 'react';
import router from 'next/router';
import axios from 'axios';
import Link from 'next/link';

import FormTitle from '../components/Form/FormTitle/FormTitle';
import MainButton from '../components/MainButton/MainButton';
import FormikControl from '../components/Form/FormikControl/FormikControl';

import { Formik, Form } from 'formik';

import UserSchema from '../Validators/UserSchema';

import connexionStyle from '../styles/Connexion.module.css';

const register = () => {
   const initialValues = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password_confirmation: '',
   };

   const [error, setError] = useState('');

   const onSubmit = (values) => {
      console.log('Form data', values);
   };

   const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      /* const payload = {
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
         }); */
   };

   return (
      <div>
         <FormTitle title={"Je m'enregistre"} subtitle='Pour créer un compte, remplissez les champs suivants :' />
         <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(formik) => {
               return (
                  <Form>
                     <FormikControl control='input' type='text' placeholder='Mon prénom' name='firstname' />
                     <FormikControl control='input' type='text' placeholder='Mon nom' name='lastname' />
                     <FormikControl control='input' type='email' placeholder='Mon email' name='email' />
                     <FormikControl control='input' type='password' placeholder='Mon mot de passe' name='password' />
                     <FormikControl
                        control='input'
                        type='password'
                        placeholder='Je confirme mon mot de passe'
                        name='password_confirmation'
                     />
                     <MainButton>Je m'enregistre</MainButton>
                  </Form>
               );
            }}
         </Formik>
         <p className={connexionStyle.message}>
            J'ai déjà un compte,
            <Link href='/login'>
               <span className={connexionStyle.registerlink}> se connecter</span>
            </Link>
            .
         </p>
      </div>
   );
};

export default register;
