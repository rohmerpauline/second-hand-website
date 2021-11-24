import * as Yup from "yup";

import { CATEGORIES_VALUES } from '../constants'

const requiredMessage = 'Ce champ est requis.'

const AdGiveObjectSchema = Yup.object().shape({
   title: Yup.string().required(requiredMessage),
   description: Yup.string().required(requiredMessage).max(300, 'too long'),
   location: Yup.string().required(requiredMessage).max(100, 'too long'),
   categories: Yup.string().required(requiredMessage).oneOf(CATEGORIES_VALUES, 'Cette option n\'est pas autorisée.'),
   type_ad: Yup.string().required(requiredMessage).oneOf(['1'], 'Cette option n\'est pas autorisée.'),
})

export default AdGiveObjectSchema;