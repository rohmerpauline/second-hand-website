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
      passwordConfirmation: '',
   };

   const [error, setError] = useState('');

   const onSubmit = (values: {}) => {
      console.log('Form data', values);
      axios({
         method: 'POST',
         url: '/user/register',
         data: values,
      })
         .then(function (response) {
            if (response.data === 'User created') {
               router.push('/');
            } else if (response.data.error) {
               setError(response.data.error);
            }
         })
         .catch((error) => {
            return;
         });
   };

   return (
      <div>
         <FormTitle title={"Je m'enregistre"} subtitle='Pour créer un compte, remplissez les champs suivants :' />
         <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={UserSchema}>
            {(formik) => {
               return (
                  <Form>
                     <FormikControl
                        control='input'
                        type='text'
                        placeholder='Mon prénom'
                        name='firstname'
                        errorMessage={error.firstname}
                     />
                     <FormikControl
                        control='input'
                        type='text'
                        placeholder='Mon nom'
                        name='lastname'
                        errorMessage={error.lastname}
                     />
                     <FormikControl
                        control='input'
                        type='email'
                        placeholder='Mon email'
                        name='email'
                        errorMessage={error.email}
                     />
                     <FormikControl
                        control='input'
                        type='password'
                        placeholder='Mon mot de passe'
                        name='password'
                        errorMessage={error.password}
                     />
                     <FormikControl
                        control='input'
                        type='password'
                        placeholder='Je confirme mon mot de passe'
                        name='passwordConfirmation'
                        errorMessage={error.passwordConfirmation}
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
