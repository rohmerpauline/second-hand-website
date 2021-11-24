import * as Yup from "yup";

import { CATEGORIES_VALUES, OBJECT_CONDITION_VALUES } from '../constants'

const requiredMessage = 'Ce champ est requis.'

const AdGiveObjectSchema = Yup.object().shape({
   title: Yup.string().required(requiredMessage),
   description: Yup.string().required(requiredMessage).max(300, 'too long'),
   location: Yup.string().required(requiredMessage).max(100, 'too long'),
   categories: Yup.string().required(requiredMessage).oneOf(CATEGORIES_VALUES, 'Cette option n\'est pas autorisée.'),
   object_condition: Yup.string().required(requiredMessage).oneOf(OBJECT_CONDITION_VALUES, 'Cette option n\'est pas autorisée.'),
   type_ad: Yup.string().required(requiredMessage).oneOf(['0'], 'Cette option n\'est pas autorisée.'),
   image1: Yup.string().required(requiredMessage)/* .matches(/.PNG$|.jpg$|.jpeg$|.png$/, 'Les formats acceptés sont jpg, jpeg et png.') */,
   image2: Yup.string()/* .matches(/.PNG$|.jpg$|.jpeg$/, 'Les formats acceptés sont jpg, jpeg et png.') */,
   image3: Yup.string()/* .matches(/(.PNG$|.jpg$|.jpeg$)/, 'Les formats acceptés sont jpg, jpeg et png.') */,
})

export default AdGiveObjectSchema;