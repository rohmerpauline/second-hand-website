import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
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

  public messages = {
    'email.unique': 'Un compte avec cet email existe déjà.',
    'firstname.notIn': 'Ce prénom n\'est pas autorisé.',
    'lastname.notIn': 'Ce nom n\'est pas autorisé.',
    'password.regex': 'Le mot de passe doit contenir 8 charactères (lettres, chiffres et un charactère spécial).',
    'password.confirmed': 'Les mots de passe ne correspondent pas.'
  }
}
