import { useState } from 'react';
import Link from 'next/link';
/* import Form from '../components/Form/Form'; */
import FormTitle from '../components/FormTitle/FormTitle';
import { Formik, Form, Field } from 'formik';
import Input from '../components/Input/Input';
/* import Label from '../components/Label/Label'; */
import Button from '../components/Button/Button';
import { useHandleChange } from '../hooks';
import connexionStyle from '../styles/Connexion.module.css';
import axios from 'axios';
import router from 'next/router';

import UserSchema from '../Validators/UserSchema';

const formTitle = {
   title: "Je m'enregistre",
   subtitle: 'Pour créer un compte, remplissez les champs suivants :',
};

/* const formContent = {
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
         name: 'passwordConfirmation',
         placeholder: 'Je confirme mon mot de passe',
      },
   ],
   buttonText: "Je m'enregistre",
};
 */

const register = () => {
   /* const [error, setError] = useState(''); */

   /* const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      useHandleChange({ e, setState });
   }; */

   /* const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
         .then(function (response) {

         })
         .catch((error) => {
            console.log(error.response.data);
            setError(error);
         });
   };
 */

   const initialValues = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordConfirmation: '',
   };

   const onSubmit = (values) => {
      console.log(values.firstname);
   };

   return (
      <>
         <FormTitle formTitle={formTitle} />
         <Formik
            initialState={initialValues}
            /* validationSchema={UserSchema} */
            onSubmit={onSubmit}
         >
            <Form>
               <Field name='firstname' placeholder='Mon prénom' as={Input} />
               {/* <ErrorMessage name='firstname' /> */}
               <Field name='lastname' placeholder='Mon nom' as={Input} />
               <Field name='email' placeholder='Mon email' as={Input} />
               <Field type='password' name='password' placeholder='Ton mot de passe' as={Input} />
               <Field type='password' name='passwordConfirmation' placeholder='Confirme ton mot de passe' as={Input} />
               <Button>Je m'enregistre</Button>
            </Form>
         </Formik>
         <p className={connexionStyle.message}>
            J'ai déjà un compte,
            <Link href='/login'>
               <span className={connexionStyle.registerlink}>se connecter</span>
            </Link>
            .
         </p>
      </>
   );
};

export default register;
