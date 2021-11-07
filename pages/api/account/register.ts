import { NextApiRequest, NextApiResponse } from 'next';
import executeQuery from '../../../lib/db';
import * as yup from 'yup';
import moment from 'moment';



const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {

   const { firstname, lastname, email, password, passwordConfirmation} = req.body

   const createUserSchema = yup.object().shape({
      lastname: yup.string().required('Last name is required').min(2, 'too short'),
      firstname: yup.string().required('First name is required').min(2, 'too short'),
      email: yup.string().email().required('Email is required'),
      password: yup.string().matches(/(?=.*[0-9]+)(?=.*[!@#$%^&*]+)[a-zA-Z-0-9-!@#$%^&*]{8,}/, 'Password must contain letters, number and a special character').required('Password is required'),
      passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Password must match').required('Password confirmation is required')
   })

   if(req.method === 'POST'){
   
      try {
         await createUserSchema.validate(req.body, {abortEarly: false})

      } catch (err){

         const errors = []
         err.inner.forEach(e => {
            errors.push({
               name: e.path,
               message: e.message
            })
        });
        res.status(400).send(errors)

      }
   }

   /* if(valid){
   
   } else {
      return errors
   } */
   

   

  /*  const createdAt = moment().format('MMMM Do YYYY, h:mm:ss a')
   const updatedAt = moment().format('MMMM Do YYYY, h:mm:ss a') */

  /*  const valide = createUserSchema.validate(req.body) */

   /* if(req.method === 'POST'){
      try{ 
         const result =  await executeQuery({ 
            query: 'INSERT INTO users(firstname, lastname, password, email, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?)',
            values: [firstname, lastname, password, email, createdAt, updatedAt]
         })
         res.status(200).send(result)
      } catch (error){
         console.log(error)
      } */
         

}

export default registerHandler;