import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdAskObjectValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    type_ad: schema.string({trim: true}, [
      rules.maxLength(255),
      rules.equalTo('1')
    ]),
    title: schema.string({trim: true}, [
      rules.maxLength(255)
    ]),
    description: schema.string({trim: true}),
    location: schema.string({trim: true}, [
      rules.maxLength(255)
    ]),
    categories: schema.string({trim: true}, [
      rules.maxLength(255)
    ]),
    user_id: schema.number(),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}
