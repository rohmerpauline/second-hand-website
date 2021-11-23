import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ads extends BaseSchema {
  protected tableName = 'ads'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('type_ad').notNullable()
      table.string('title', 255).notNullable()
      table.string('image1', 255).nullable()
      table.string('image2', 255).nullable()
      table.string('image3', 255).nullable()
      table.text('description').notNullable()
      table.string('location', 255).notNullable()
      table.string('categories', 255).nullable()
      table.string('object_condition', 255).nullable()
      table.integer('user_id').notNullable()

      //id, typeAd, title, image1, image2, image3, description, location, categories, objectcondition, userId
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
