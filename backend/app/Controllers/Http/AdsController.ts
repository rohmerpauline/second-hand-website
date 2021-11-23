import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ad from '../../Models/Ad';
import AdGiveObjectValidator from '../../Validators/AdGiveObjectValidator';
import AdAskObjectValidator from 'App/Validators/AdAskObjectValidator';
import AdServiceValidator from 'App/Validators/AdServiceValidator';

export default class AdsController {

  public async index() {
    //
  }

  public async create({ request} : HttpContextContract ) {

    console.log(request.body())

    const typeAd = request.input('type_ad')
    let validatorToUse;
    switch(typeAd) {
      case '0':
        validatorToUse = AdGiveObjectValidator
      break;
      case '1':
        validatorToUse = AdAskObjectValidator
      break;
      case '2':
        validatorToUse = AdServiceValidator
      break;
      case '3':
        validatorToUse = AdServiceValidator
      break;
      default: null
    }

    try {
      if(!validatorToUse) return;
      const validatedData = await request.validate(validatorToUse);
      await Ad.create(validatedData)
      return 'Ad created'
    } catch(err){
      console.log(err.messages)
    }

  }


}
