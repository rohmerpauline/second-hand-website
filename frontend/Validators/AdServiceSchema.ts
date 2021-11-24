import * as Yup from "yup";

const requiredMessage = 'Ce champ est requis.'

const AdGiveObjectSchema = Yup.object().shape({
   title: Yup.string().required(requiredMessage),
   description: Yup.string().required(requiredMessage).max(300, 'too long'),
   location: Yup.string().required(requiredMessage).max(100, 'too long'),
})

export default AdGiveObjectSchema;