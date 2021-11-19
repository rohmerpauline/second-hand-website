import { useState } from 'react';
import router from 'next/router';
import axios from 'axios';
import Link from 'next/link';

import FormTitle from '../components/Form/FormTitle/FormTitle';
import Label from '../components/Form/Label/Label';
import FormikControl from '../components/Form/FormikControl/FormikControl';
import Input from '../components/Form/Input/Input';
import TextArea from '../components/Form/TextArea/TextArea';
import MainButton from '../components/MainButton/MainButton';
import AccountMessage from '../components/AccountMessage/AccountMessage';

import { Formik, Form } from 'formik';

import LoginSchema from '../Validators/LoginSchema';

import connexionStyle from '../styles/Connexion.module.css';

const login = () => {
   const initialValues = {
      email: '',
      password: '',
      rememberMe: [],
   };

   const [error, setError] = useState('');

   const onSubmit = (values) => {
      console.log('Form data', values);
   };

   const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      const payload = {
         email: state.email,
         password: state.password,
         rememberMe: state.remember_me,
      };

      axios({
         method: 'post',
         url: '/api/account/login',
         data: payload,
      })
         .then(function (response) {
            console.log(response.data);
         })
         .catch((error) => {
            setError(error);
            console.log(error);
         });

      /*  axios({
         method: 'post',
         url: '/api/login',
         data: payload,
      })
         .then(function (response) {
            console.log(response.data);
         })
         .catch((error) => {
            setError(error);
            console.log(error);
         }); */
   };

   const checkBoxOption = [{ key: 'Remember me', value: 'true' }];

   return (
      <>
         <FormTitle title='Je me connecte' />
         <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={LoginSchema}>
            {(formik) => {
               return (
                  <Form>
                     <FormikControl control='input' type='email' placeholder='Mon email' name='email' />
                     <FormikControl control='input' type='password' placeholder='Mon mot de passe' name='password' />
                     <FormikControl control='checkbox' name='rememberMe' options={checkBoxOption} />
                     <MainButton>Je me connecte</MainButton>
                  </Form>
               );
            }}
         </Formik>
         <AccountMessage href='/register' text="Je n'ai pas de compte" textLink='créer un compte' />
      </>
   );
};

export default login;
