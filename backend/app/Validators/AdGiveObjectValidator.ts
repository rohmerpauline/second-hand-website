import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdGiveObjectValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    type_ad: schema.string({trim: true}, [
      rules.maxLength(255),
      rules.equalTo('0')
    ]),
    title: schema.string({trim: true}, [
      rules.maxLength(255)
    ]),
    image1: schema.string({trim: true}/* , [
      rules.regex(new RegExp('(?=(.PNG$|.jpg$|.jpeg$))'))
    ] */),
    image2: schema.string.optional({trim: true}/* , [
      rules.regex(new RegExp('(?=(.png$|.jpg$|.jpeg$))'))
    ] */),
    image3: schema.string.optional({trim: true}/* , [
      rules.regex(new RegExp('(?=(.png$|.jpg$|.jpeg$))'))
    ] */),
    description: schema.string({trim: true}),
    location: schema.string({trim: true}, [
      rules.maxLength(255)
    ]),
    categories: schema.string({trim: true}, [
      rules.maxLength(255)
    ]),
    object_condition: schema.string({trim: true}, [
      rules.maxLength(255)
    ]),
    user_id: schema.number(),
  })

  public messages = {}
}
