import { useState, useContext } from 'react';
import router from 'next/router';
import axios from 'axios';
import Link from 'next/link';

import FormTitle from '../components/Form/FormTitle/FormTitle';
import FormikControl from '../components/Form/FormikControl/FormikControl';
import MainButton from '../components/MainButton/MainButton';
import AccountMessage from '../components/AccountMessage/AccountMessage';

import { AuthContext } from '../../frontend/Context/Auth/AuthContext';

import { Formik, Form } from 'formik';

import LoginSchema from '../Validators/LoginSchema';

const login = () => {
   const initialValues = {
      email: '',
      password: '',
      rememberMe: [],
   };

   const [error, setError] = useState('');

   const [visibilityField, setVisibilityField] = useState(false);
   const [isAuth, setIsAuth] = useContext(AuthContext);

   const onSubmit = (values) => {
      console.log('Form data', values);

      axios({
         method: 'post',
         url: '/user/login',
         data: values,
      })
         .then(function (response) {
            const { token, userId } = response.data;
            setIsAuth({
               isAuthenticated: true,
               token: token,
               id: userId,
            });
            router.push('/');
         })
         .catch((error) => {
            setError(error);
            console.log(error);
         });
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
                     <FormikControl
                        control='input'
                        type={visibilityField === true ? 'text' : 'password'}
                        placeholder='Mon mot de passe'
                        name='password'
                        eye={true}
                        visibilityField={visibilityField}
                        setVisibilityField={setVisibilityField}
                     />
                     <FormikControl control='checkbox' name='rememberMe' options={checkBoxOption} />
                     <MainButton>Je me connecte</MainButton>
                  </Form>
               );
            }}
         </Formik>
         <AccountMessage href='/register' text="Je n'ai pas de compte" textLink='cr??er un compte' />
      </>
   );
};

export default login;
