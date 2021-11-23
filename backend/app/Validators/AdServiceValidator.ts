import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdServiceValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    type_ad: schema.string({trim: true}, [
      rules.maxLength(255),
      rules.equalTo('2' || '3')
    ]),
    title: schema.string({trim: true}, [
      rules.maxLength(255)
    ]),
    description: schema.string({trim: true}),
    location: schema.string({trim: true}, [
      rules.maxLength(255)
    ]),
    user_id: schema.number(),
  })

  public messages = {}
}
