import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from '../../Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UsersController {

  public async index() {
    //
  }

  public async login({auth, response, request } : HttpContextContract) {

    const email = request.input('email')
    const password = request.input('password')
    let rememberMe = request.input('remember_me')

    if (rememberMe){
      rememberMe = true
    } else {
      rememberMe = false
    }

    const user = await User
      .query()
      .where('email', email)
      .firstOrFail()

      //verify password
      if(!(await Hash.verify(user.password, password))) {
        return response.badRequest('Invalid password')
      }

      //create session
      await auth.use('web').login(user, rememberMe)

  }

  public async register({ request } : HttpContextContract ){

      const registerValidation = schema.create({
        email:schema.string({ trim: true },[
          rules.unique({table: 'users', column: 'email'}),
          rules.email(),
          rules.maxLength(255),
        ]),
        lastname:schema.string({ trim: true}, [
          rules.notIn(['admin', 'super', 'root', 'moderator'])
        ]),
        firstname:schema.string({ trim: true}, [
          rules.notIn(['admin', 'super', 'root', 'moderator'])
        ]),
        password:schema.string({ trim: true}, [
          rules.confirmed('passwordConfirmation'),
          rules.regex(new RegExp('(?=.*[0-9]+)(?=.*[!@#$%^&*]+)[a-zA-Z-0-9-!@#$%^&*]{8,}')),
        ]),
      })

      try {
        const validatedData = await request.validate({
          schema : registerValidation,
          messages : {
            required: 'Your {{field}} is required to create your account',
            'email.unique' : 'An account was already created with this email'
          }
        })
        await User.create(validatedData)
        return 'User created'
      } catch(err){
        return err.messages
      }
  }


}
