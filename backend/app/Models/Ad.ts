import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ad extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public typeAd: string

  @column()
  public title: string

  @column()
  public image1?: string

  @column()
  public image2?: string

  @column()
  public image3?: string

  @column()
  public description: string

  @column()
  public location: string

  @column()
  public categories?: string

  @column()
  public objectCondition?: string

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
