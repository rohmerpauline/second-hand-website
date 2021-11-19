import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'
/* import Hash from '@ioc:Adonis/Core/Hash' */
import UserValidator from '../../Validators/UserValidator'

export default class UsersController {

  public async index() {
    //
  }

  public async register({ request, response } : HttpContextContract ){


    /* if (validatedData){
      await User.create(validatedData)
      return 'User created'
    } else {
      return 'error'
    } */

      try {
        const validatedData = await request.validate(UserValidator)
        await User.create(validatedData)
        return 'User created'
      } catch(err){
        const errors = err.messages.errors

        const errorsMessage = {}
        errors.map(err => {
          errorsMessage[err.field] = err.message
        })

        console.log(errorsMessage)

        return response.send({error: errorsMessage})
      }
  }

  public async login({auth, request } : HttpContextContract) {

    const { email, password } = request.all()

    try {
      /* const user = await User
        .query()
        .where('email', email)
        .firstOrFail()

      if (!(await Hash.verify(user.password, password))) {
        await auth.use('web').login(user)
      } */
      await auth.use('web').attempt(email, password)

      return 'Utilisateur connecté'
    } catch(err){
      /* return err.message */
      return 'Identifiant ou mot de passe incorrects.'
    }

  }

}
