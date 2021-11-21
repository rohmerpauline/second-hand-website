import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'
/* import Hash from '@ioc:Adonis/Core/Hash' */
import UserValidator from '../../Validators/UserValidator'

export default class UsersController {

  public async index() {
    //
  }

  public async register({ request, response } : HttpContextContract ){

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

        return response.send({error: errorsMessage})
      }
  }

  public async login({auth, request, response} : HttpContextContract) {

    const { email, password } = request.all()

    try {
      const token = await auth.use('api').attempt(email, password)
      return token
    } catch(err){
      return response.badRequest('Identifiant ou mot de passe incorrects.')
    }
  }

}
