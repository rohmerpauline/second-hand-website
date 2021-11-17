# React Formik

### What is Formik?

Formik is a small library that helps you deal with forms in React.

-  Managing form data
-  Form submission
-  Form validation and displaying error messages

Formik helps you deal with forms in a scalable, performant and easy way.

### Managing form state

Formik allows to get rid of the state (object) created for the form.

```js

import { useFormik } from 'formik';

const Form = () => {

   const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         channel: ''
      }
   })

   return(
   <form>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}>
      <label htmlFor='email'>Email</label>
      <input type='text' id='email' name='email' onChange={formik.handleChange} value={formil.values.email}>
      <label htmlFor='channel'>Channel</label>
      <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formil.values.channel}>
      <button>Submit</button>
   </form>
   )

}


```
