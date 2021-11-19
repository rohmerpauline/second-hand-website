import { NextApiRequest, NextApiResponse } from 'next';
import executeQuery from '../../../lib/db';
import * as yup from 'yup';
import moment from 'moment';

import UserSchema from '../../../Validators/UserSchema'

const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {

   const { firstname, lastname, email, password, passwordConfirmation} = req.body


   /* console.log(firstname)
 */

   if(req.method === 'POST'){
      try {
         
         await UserSchema.validate(req.body, {abortEarly: false})
         const result =  await executeQuery({ 
            query: 'INSERT INTO users (id, firstname, lastname, password, email) VALUES(?, ?, ?, ?, ?)',
            values: [1, firstname, lastname, password, email]
         })
         console.log(result)
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

}



export default registerHandler;